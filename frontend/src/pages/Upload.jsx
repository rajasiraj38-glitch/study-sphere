import React from 'react';

function Upload() {
  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      <div className="page-header">
        <h1>Submit Project</h1>
        <p style={{ color: 'var(--text-muted)' }}>Share your GitHub repository to get feedback and earn rank points.</p>
      </div>

      <div className="glass-panel">
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Project Title</label>
            <input type="text" placeholder="e.g. Weather App in React" className="form-input" />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>GitHub Repository URL</label>
            <input type="url" placeholder="https://github.com/username/repo" className="form-input" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Tech Stack (comma separated)</label>
            <input type="text" placeholder="React, Node.js, MongoDB" className="form-input" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Description & Help Needed</label>
            <textarea rows="4" placeholder="Briefly describe what this does and what feedback you are looking for..." className="form-input" style={{ resize: 'vertical' }}></textarea>
          </div>

          <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
            Submit Project for Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
