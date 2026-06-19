import React from 'react';

function Members() {
  const members = [
    { name: 'Sarah Jenkins', role: 'Senior Guide', level: 7, tags: ['React', 'Node.js'] },
    { name: 'Michael Chen', role: 'Guide', level: 6, tags: ['Python', 'Data Structures'] },
    { name: 'Priya Patel', role: 'Advanced Member', level: 4, tags: ['C++', 'Algorithms'] },
    { name: 'James Wilson', role: 'Learner', level: 2, tags: ['HTML/CSS'] },
  ];

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, 0)', width: '80%', height: '500px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }}></div>

      <div className="page-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', textShadow: '0 0 20px rgba(99,102,241,0.4)' }}>Community <span style={{ color: 'var(--primary-color)' }}>Directory</span></h1>
        <p style={{ color: 'var(--text-muted)' }}>Find peers, mentors, and connect with ranked guides.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {members.map((member, index) => (
          <div key={index} className="glass-card action-card" style={{ textAlign: 'center', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
            
            {/* Holographic accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' }}></div>

            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.4))', 
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(99,102,241,0.4)',
              padding: '4px'
            }}>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} 
                alt={member.name} 
                style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-dark)' }} 
              />
            </div>
            
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{member.name}</h3>
            
            <div style={{ display: 'inline-block', background: 'rgba(99, 102, 241, 0.2)', color: 'var(--primary-light)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
              {member.role}
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Level {member.level} Rank</p>
            
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {member.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', color: '#e2e8f0' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
