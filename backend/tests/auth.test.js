const request = require('supertest');
const express = require('express');
const authRoutes = require('../routes/auth');

// Mock User Model properly
jest.mock('../models/User', () => {
  const UserMock = function(data) {
    Object.assign(this, data);
    this.id = 'mock_id_123';
    this.save = jest.fn().mockResolvedValue(this);
  };
  UserMock.findOne = jest.fn();
  return UserMock;
});

const User = require('../models/User');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

describe('Auth Endpoints (Simulated)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user successfully', async () => {
    User.findOne.mockResolvedValue(null);

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        level: 'Beginner'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.user).toHaveProperty('username', 'testuser');
    
    const cookies = res.headers['set-cookie'];
    expect(cookies).toBeDefined();
    expect(cookies[0]).toMatch(/token=.*HttpOnly/);
  });

  it('should prevent registration with duplicate email', async () => {
    User.findOne.mockResolvedValue({ email: 'test@example.com' });

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser2',
        email: 'test@example.com',
        password: 'password123',
        level: 'Beginner'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual('User already exists');
  });
});
