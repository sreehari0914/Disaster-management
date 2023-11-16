import React from 'react';

const LandingPage = () => {
  const landingPageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={landingPageStyle}>
      <h1>Welcome to Aid Connect</h1>
      <p>
        A platform where you can post your disaster needs and connect with people willing to help.
      </p>
    </div>
  );
};

export default LandingPage;