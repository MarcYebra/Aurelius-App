import React from 'react'
import JobDescriptionForm from './JobDescriptionForm';

const LandingPage = () => {
  return (
    <div className="landing-page-center-align">
      <div className="landing-page-column">
        <img src="/logo.png" style={{ width: '120px', height: 'auto' }} alt="Logo" />
        <h1>Practice makes perfect</h1>
        <JobDescriptionForm />
      </div>
    </div>
  );
};

export default LandingPage