import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Upload from './pages/Upload';
import Members from './pages/Members';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Global Navigation */}
        <nav className="navbar">
          <Link to="/" className="logo">Study<span>Sphere</span></Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat Rooms</Link>
            <Link to="/upload">Submit Project</Link>
            <Link to="/members">Members</Link>
          </div>
          <div className="nav-auth">
            <Link to="/login" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Log in</Link>
            <Link to="/signup" className="btn btn-primary" style={{ textDecoration: 'none' }}>Sign up free</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
