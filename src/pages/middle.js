// Middle.js

import React from 'react';
import './middle.css';
import helpImage from '../images/help.png'; 
import coordImage from '../images/coord.png';  
import volImage from '../images/volunteer.png';
const Middle = () => {
  return (
    <div className="middle-container">
      <div className="centered-text">
        <h2 style={{fontSize:'7rem',}}>Join Our Disaster Response Network</h2>
      </div>
      <div className="text-on-right">
        <div className="image-container">
          <img src={helpImage} alt="Volunteer in action" />
        </div>
        <div className="text-container">
          <h3 style={{fontSize:'2.6rem',}}>Report Incidents</h3>
          <p style={{fontSize:'1.6rem',}}>
            Be the eyes on the ground.
            Use our intuitive reporting tools to quickly and accurately document incidents. 
            <br /> <br /> Your timely reports empower responders and aid agencies to assess and prioritize their actions effectively.
          </p>
        </div>
      </div>

      <div className="text-on-right">
        
        <div className="text-container">
          <h3  style={{fontSize:'2.6rem',}}>Coordinate Relief Efforts</h3>
          <p style={{fontSize:'1.6rem',}}>
            Collaborate with fellow volunteers and relief organizations to coordinate and execute response efforts. <br /><br /> Our platform provides a centralized hub for real-time communication, resource allocation, and task management during crisis situations.
          </p>
        </div>
        <div className="image-container">
          <img  src={coordImage} alt="Volunteer in action" />
        </div>
      </div>

      <div className="text-on-right">
        <div className="image-container">
          <img src={volImage} alt="Volunteer in action" />
        </div>
        <div className="text-container">
          <h3 style={{ fontSize: '2.6rem', color: '#9cceff' }}>Volunteer <br /> Engagement</h3>
          <p style={{ fontSize: '1.6rem', color: '#ffffff' }}>
            Engage with communities affected by disasters and become a key participant in our volunteer network.
            <br /><br />Your dedication and involvement contribute significantly to effective disaster response and recovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;