import React from 'react'
import ChatBox from './ChatBox'

const Logo = './public/logo.png'

const LandingPage = () => {
  return (
    <div className="landing-page-center-align">
      <div className="landing-page-column">
        <img src="/logo.png" style={{ width: '120px', height: 'auto' }} alt="Logo" />
        <h1>Practice makes perfect</h1>
        <ChatBox />
      </div>
    </div>
  );
};

export default LandingPage