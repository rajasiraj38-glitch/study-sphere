import React from 'react';

function Chat() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Community Chat</h1>
        <p style={{ color: 'var(--text-muted)' }}>Join live discussions with mentors and peers.</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', height: '600px' }}>
        {/* Sidebar */}
        <div className="glass-panel" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ color: 'var(--primary)' }}>Rooms</h3>
          <button className="btn btn-outline" style={{ textAlign: 'left' }}># general</button>
          <button className="btn btn-outline" style={{ textAlign: 'left' }}># web-dev</button>
          <button className="btn btn-outline" style={{ textAlign: 'left' }}># python-help</button>
          <button className="btn btn-outline" style={{ textAlign: 'left' }}># career-advice</button>
        </div>

        {/* Main Chat Area */}
        <div className="glass-panel" style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, overflowY: 'auto', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem', paddingBottom: '1rem' }}>
            
            {/* Mock Messages using Chat Bubbles */}
            <div className="chat-message chat-received">
              <strong style={{ color: 'var(--accent-pink)', marginBottom: '4px' }}>Alice (Mentor)</strong>
              <div className="chat-bubble">
                Welcome to the web-dev room! Drop your code if you need help.
              </div>
            </div>

            <div className="chat-message chat-sent">
              <strong style={{ color: 'var(--primary)', marginBottom: '4px' }}>Bob (You)</strong>
              <div className="chat-bubble">
                Hey! Does anyone know how to center a div using grid?
              </div>
            </div>

          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="form-input" 
              style={{ flex: 1 }} 
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
