import React from 'react';
import './Glossary.css';

const Glossary = () => {
  const terms = [
    {
      term: 'Disaster',
      definition: 'A sudden, destructive event that causes significant harm to life, property, infrastructure, or the environment.'
    },
    {
      term: 'Emergency',
      definition: 'A situation that requires immediate action to prevent or mitigate serious harm.'
    },
    {
      term: 'Relief',
      definition: 'Assistance provided to people affected by a disaster to meet their immediate needs for food, water, shelter, and medical care.'
    },
    {
      term: 'Recovery',
      definition: 'The process of restoring communities and infrastructure to their pre-disaster state.'
    },
    {
      term: 'Resilience',
      definition: 'The ability of a community to anticipate, prepare for, and recover from disasters.'
    },
    {
      term: 'Mitigation',
      definition: 'Actions taken to reduce or prevent the impact of disasters. This includes implementing measures to decrease the severity or likelihood of disasters occurring, such as building codes, early warning systems, and land-use planning.'
    },
    {
      term: 'Evacuation',
      definition: 'The organized and timely movement of people away from areas at risk of disasters, such as floods or disease outbreaks.'
    },
    {
      term: 'Shelter-in-Place',
      definition: 'A protective action where individuals seek refuge inside a building or structure to avoid exposure to external hazards, commonly used during disease outbreaks or chemical emergencies.'
    },
    {
      term: 'Personal Protective Equipment (PPE)',
      definition: 'Specialized clothing or equipment worn by individuals to protect against health and safety hazards, such as masks, gloves, and gowns during disease outbreaks.'
    },
    {
      term: 'Community Engagement',
      definition: 'The involvement and active participation of communities in disaster planning, response, and recovery efforts. It includes communication, collaboration, and partnership-building to enhance resilience.'
    },
    {
      term: 'Incident Command System (ICS)',
      definition: 'A standardized management system used for organizing and coordinating on-scene emergency operations, providing a hierarchical structure and clearly defined roles and responsibilities.'
    },
    {
      term: 'Mutual Aid',
      definition: 'A cooperative arrangement where emergency responders and resources from one jurisdiction provide assistance to another during a disaster or emergency, enhancing overall response capabilities.'
    }
  ];

  return (
    <div className="glossary-container">
      <div className="glossary">
        <div className="glossary-header">
          <h1 className="glossary-bg">Glossary</h1>
          <br></br><h2 className="subhead">General Awareness</h2>
        </div>
        {terms.map((term) => (
          <div key={term.term}>
            <h2 className="glossary-term">{term.term}</h2>
            <p className="glossary-definition">{term.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
