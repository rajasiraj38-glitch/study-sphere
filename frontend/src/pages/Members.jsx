import React from 'react';

function Members() {
  const members = [
    { name: 'Sarah Jenkins', role: 'Senior Guide', level: 7, tags: ['React', 'Node.js'] },
    { name: 'Michael Chen', role: 'Guide', level: 6, tags: ['Python', 'Data Structures'] },
    { name: 'Priya Patel', role: 'Advanced Member', level: 4, tags: ['C++', 'Algorithms'] },
    { name: 'James Wilson', role: 'Learner', level: 2, tags: ['HTML/CSS'] },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Community Members</h1>
        <p style={{ color: 'var(--text-muted)' }}>Find peers, mentors, and connect with ranked guides.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {members.map((member, index) => (
          <div key={index} className="glass-panel member-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'var(--primary)', 
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              {member.name.charAt(0)}
            </div>
            <h3 style={{ marginBottom: '0.25rem' }}>{member.name}</h3>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{member.role}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Level {member.level}</p>
            
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {member.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
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
