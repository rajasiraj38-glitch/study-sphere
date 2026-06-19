import React from 'react';

function Upload() {
  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      
      {/* Dynamic Glow Behind Form */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)', zIndex: -1, pointerEvents: 'none' }}></div>

      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', textShadow: '0 0 20px rgba(99,102,241,0.4)' }}>Submit <span style={{ color: 'var(--primary-color)' }}>Project</span></h1>
        <p style={{ color: 'var(--text-muted)' }}>Share your GitHub repository to get feedback and earn rank points.</p>
      </div>

      <div className="glass-card" style={{ padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(30, 41, 59, 0.6)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Project Title</label>
            <input type="text" placeholder="e.g. Weather App in React" className="form-input" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', transition: 'all 0.3s ease' }} />
          </div>
          
          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>GitHub Repository URL</label>
            <input type="url" placeholder="https://github.com/username/repo" className="form-input" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', transition: 'all 0.3s ease' }} />
          </div>

          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Tech Stack</label>
            <input type="text" placeholder="React, Node.js, MongoDB" className="form-input" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', transition: 'all 0.3s ease' }} />
          </div>

          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary-light)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Description & Help Needed</label>
            <textarea rows="4" placeholder="Briefly describe what this does and what feedback you are looking for..." className="form-input" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', transition: 'all 0.3s ease', resize: 'vertical' }}></textarea>
          </div>

          <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(99,102,241,0.5)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
