import { useState, useRef } from 'react';

function Home() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -15; 
    const rotateY = (mouseX / (rect.width / 2)) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="bg-glow"></div>
      
      {/* 3D Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1>
            Master Code.<br />
            <span className="gradient-text">Together.</span>
          </h1>
          <p>
            Join a free developer community where you learn languages, discuss code, share GitHub projects, and level up your rank to become a mentor.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Learning Now</button>
            <button className="btn btn-outline">View Community Rules</button>
          </div>
        </div>

        {/* Interactive 3D Visual */}
        <div 
          className="hero-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="glass-card"
            ref={cardRef}
            style={{ 
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              boxShadow: `${-rotation.y}px ${rotation.x + 20}px 40px rgba(0, 0, 0, 0.4)`
            }}
          >
            {/* Secondary 3D Floating Language Badges */}
            <div className="lang-badge lang-js">JavaScript</div>
            <div className="lang-badge lang-py">Python</div>
            <div className="lang-badge lang-cpp">C++</div>

            <div className="card-badge">
              LVL. 4
              <span>Mentor</span>
            </div>
            
            <div className="code-mockup">
              <span className="line comment">// Level up your rank</span>
              <span className="line"><span className="keyword">function</span> <span className="func">becomeGuide</span>(user) {'{'}</span>
              <span className="line">  <span className="keyword">if</span> (user.level {'>='} <span className="string">4</span> {'&&'} user.trustScore {'>'} <span className="string">90</span>) {'{'}</span>
              <span className="line">    <span className="keyword">return</span> <span className="string">"You are now a Mentor!"</span>;</span>
              <span className="line">  {'}'}</span>
              <span className="line">  <span className="keyword">return</span> <span className="string">"Keep coding & helping others!"</span>;</span>
              <span className="line">{'}'}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="features" id="learn">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Language Tracks</h3>
          <p>Master C, C++, Python, and more through structured learning paths and tests.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Code Discussions</h3>
          <p>Stuck on a bug? Share your code snippet and get help from ranked community members.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🐙</div>
          <h3>GitHub Showcase</h3>
          <p>Submit your public repos, get code reviews, and build a strong portfolio.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3>Rank & Mentor</h3>
          <p>Pass coding tests to rank up from Learner to Guide and mentor others.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
