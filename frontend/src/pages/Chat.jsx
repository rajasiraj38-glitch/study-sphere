import React, { useState } from 'react';

function Chat() {
  const [activeRoom, setActiveRoom] = useState('web-dev');

  return (
    <div className="page-container">
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', textShadow: '0 0 20px rgba(99,102,241,0.4)' }}>Community <span style={{ color: 'var(--primary-color)' }}>Chat</span></h1>
        <p style={{ color: 'var(--text-muted)' }}>Join live 3D discussions with mentors and peers.</p>
      </div>

      <div className="chat-layout" style={{ display: 'flex', gap: '2rem', height: '650px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Sidebar - Room Selector */}
        <div className="glass-card chat-sidebar" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Active Rooms</h3>
          {['general', 'web-dev', 'python-help', 'career-advice'].map(room => (
            <button 
              key={room}
              onClick={() => setActiveRoom(room)}
              className={`action-card ${activeRoom === room ? 'active-room' : ''}`} 
              style={{ 
                padding: '1rem', 
                textAlign: 'left', 
                background: activeRoom === room ? 'rgba(99, 102, 241, 0.2)' : 'rgba(0,0,0,0.2)',
                borderColor: activeRoom === room ? 'var(--primary-color)' : 'transparent',
                boxShadow: activeRoom === room ? '0 0 15px rgba(99,102,241,0.3)' : 'none'
              }}
            >
              <h4 style={{ margin: 0, color: activeRoom === room ? '#fff' : 'var(--text-muted)' }}># {room}</h4>
            </button>
          ))}
        </div>

        {/* Main Chat Area */}
        <div className="glass-card chat-main" style={{ flex: '3', display: 'flex', flexDirection: 'column', padding: '1.5rem', background: 'rgba(15, 23, 42, 0.7)' }}>
          <div className="chat-window" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '1rem', marginBottom: '1rem' }}>
            
            {/* Mock Messages */}
            <div className="chat-message received" style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" alt="Alice" style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--secondary-color)' }} />
                <strong style={{ color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Alice (Mentor)</strong>
              </div>
              <div className="chat-bubble" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(0,0,0,0.4))', padding: '1rem', borderRadius: '0 20px 20px 20px', border: '1px solid rgba(236, 72, 153, 0.3)', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' }}>
                Welcome to the #{activeRoom} room! Drop your code if you need help.
              </div>
            </div>

            <div className="chat-message sent" style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexDirection: 'row-reverse' }}>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="Bob" style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                <strong style={{ color: 'var(--primary-light)', fontSize: '0.9rem' }}>Bob (You)</strong>
              </div>
              <div className="chat-bubble" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(0,0,0,0.4))', padding: '1rem', borderRadius: '20px 0 20px 20px', border: '1px solid rgba(99, 102, 241, 0.4)', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' }}>
                Hey! Does anyone know how to center a div using CSS grid in 3D space?
              </div>
            </div>

          </div>
          
          <div className="chat-input-area" style={{ display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <input 
              type="text" 
              placeholder={`Message #${activeRoom}...`} 
              style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', padding: '0 1rem', outline: 'none', fontSize: '1rem' }} 
            />
            <button className="btn btn-primary" style={{ borderRadius: '20px', padding: '0.5rem 1.5rem', boxShadow: '0 0 15px rgba(99,102,241,0.5)' }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
