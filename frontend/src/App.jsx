import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Upload from './pages/Upload';
import Members from './pages/Members';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hub from './pages/Hub';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './store/authStore';
import './index.css';

function Navigation() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Study<span>Sphere</span></Link>
      
      {isAuthenticated ? (
        <>
          <div className="nav-links">
            <Link to="/hub">My Hub</Link>
            <Link to="/chat">Chat Rooms</Link>
            <Link to="/upload">Submit Project</Link>
            <Link to="/members">Directory</Link>
          </div>
          <div className="nav-auth">
            <div className="profile-chip">
              <span className="profile-name">@{user?.username}</span>
            </div>
            <button onClick={handleLogout} className="btn btn-ghost" style={{ cursor: 'pointer' }}>Log out</button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/hub" 
            element={
              <ProtectedRoute>
                <Hub />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
