import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../utils/axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('Beginner (Lvl 0)');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login, isLoading, setLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.post('/auth/register', { 
        username, 
        email, 
        password, 
        level: level.includes('Learner') ? 'Learner' : 'Beginner' 
      });
      
      if (res.data.success) {
        // Log them in immediately
        login(res.data.user);
        navigate('/hub');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to create account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)', position: 'relative' }}>
      
      <div className="orb orb-3" style={{ top: '20%', left: '20%', width: '300px', height: '300px', zIndex: -1 }}></div>

      <div className="glass-panel animate-fade-in-up" style={{ width: '100%', maxWidth: '550px', padding: '3.5rem' }}>
        
        <div className="animate-fade-in-up delay-1">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '2.5rem', background: 'linear-gradient(to right, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Join StudySphere
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Start your journey from Learner to Mentor.
          </p>
        </div>

        {error && (
          <div className="animate-fade-in-up" style={{ padding: '1rem', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem' }} className="animate-fade-in-up delay-2">
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Username</label>
              <input 
                type="text" 
                placeholder="coder123" 
                className="form-input" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Starting Path</label>
              <select className="form-input" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>Beginner (Lvl 0)</option>
                <option>Learner (Lvl 1+)</option>
              </select>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-3">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="form-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="animate-fade-in-up delay-3">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
          </div>

          <div className="animate-fade-in-up delay-4" style={{ marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', letterSpacing: '0.5px' }} disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

        </form>
        
        <p className="animate-fade-in-up delay-4" style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
