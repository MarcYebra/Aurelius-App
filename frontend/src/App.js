import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import UserIcon from './components/UserIcon';
import Settings from './components/Settings';
import PastConversations from './components/PastConversations';



function App() {
  return (
    <Router>
      <div>
        <div className="top-bar">
          <NavBar />
          <UserIcon />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/conversations" element={<PastConversations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;