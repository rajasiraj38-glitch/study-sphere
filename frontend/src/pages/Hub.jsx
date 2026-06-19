import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Hub = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [feed, setFeed] = useState([
    { id: 1, text: "@code_ninja just joined the Python Chat", time: "2m ago" },
    { id: 2, text: "@mentor_dan reviewed a React project", time: "5m ago" },
    { id: 3, text: "@sarah_h reached Level 3: Developer!", time: "12m ago" },
    { id: 4, text: "New Community Challenge: Build a Calculator", time: "1h ago" },
  ]);

  // Gamification Math (Fake logic for dev bypass)
  const currentLevel = user?.level || 1;
  const xp = 450;
  const xpNeeded = 1000;
  const progressPercent = (xp / xpNeeded) * 100;

  return (
    <>
    <div className="hub-background"></div>
    <div className="hub-container">
      <div className="hub-header">
        <h1>Welcome to the Hub, <span>{user?.username}</span></h1>
        <p>Your centralized command center for coding, collaboration, and community.</p>
      </div>

      <div className="hub-grid">
        
        {/* PILLAR 1: Identity Hologram */}
        <div className="hub-pillar identity-pillar">
          <div className="glass-card hologram-card">
            <div className="avatar-ring">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username || 'user'}`} alt="Avatar" className="hub-avatar" />
            </div>
            <h2>{user?.username}</h2>
            <div className="role-badge">{user?.role || 'Beginner'}</div>
            
            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-value">{user?.trustScore || 100}</span>
                <span className="stat-label">Trust Score</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">Level {currentLevel}</span>
                <span className="stat-label">Rank</span>
              </div>
            </div>

            <div className="xp-section">
              <div className="xp-header">
                <span>XP to Level {currentLevel + 1}</span>
                <span>{xp} / {xpNeeded}</span>
              </div>
              <div className="xp-bar-container">
                <div className="xp-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* PILLAR 2: Action Nexus */}
        <div className="hub-pillar action-pillar">
          <div className="action-grid">
            <button className="action-card primary-action" onClick={() => navigate('/chat')}>
              <div className="action-icon">💬</div>
              <h3>Enter Study Chat</h3>
              <p>Join real-time coding rooms</p>
            </button>
            
            <button className="action-card secondary-action" onClick={() => navigate('/upload')}>
              <div className="action-icon">🚀</div>
              <h3>Submit Project</h3>
              <p>Get your code reviewed</p>
            </button>

            <button className="action-card tertiary-action" onClick={() => navigate('/members')}>
              <div className="action-icon">👥</div>
              <h3>Member Directory</h3>
              <p>Find coding partners</p>
            </button>
          </div>
        </div>

        {/* PILLAR 3: Live Community Stream */}
        <div className="hub-pillar stream-pillar">
          <div className="glass-card stream-card">
            <h3>Live Community Stream</h3>
            <div className="stream-feed">
              {feed.map(item => (
                <div key={item.id} className="stream-item">
                  <div className="stream-dot"></div>
                  <div className="stream-content">
                    <p>{item.text}</p>
                    <span className="stream-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Hub;
