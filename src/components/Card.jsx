import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DisasterDetailsList1({ disasterDetails }) {
  const navigate = useNavigate();

  const todo = () => {
    navigate('/payment', { state: { disasterId: disasterDetails.disasterid } });

  };

  const [underlineStyle, setUnderlineStyle] = useState({
    width: '0',
    height: '1px',
    backgroundColor: '#d5e0c8',
    visibility: 'hidden',
    transition: 'width 0.3s',
  });

  const headerStyle = {
    fontFamily: 'Poppins,sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    cursor: 'pointer',
  };

  const spanUnderlineStyle = {
    ...underlineStyle,
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    visibility: 'visible',
  };

  const listItemStyle = {
    fontFamily: 'Poppins,sans-serif',
    backgroundColor: '#1c1e21',
    color: '#1cb9ed',
    border: 'none',
    borderBottom: '1px solid #d5e0c8',
  };

  const redTextStyle = {
    color: 'red',
  };

  return (
    <div style={{ backgroundColor: '#2b3035', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '80rem', backgroundColor: '#1c1e21', boxShadow: '0px 4px 16px rgba(255, 255, 255, 0.5)',padding:'0.15rem' }}>
        <Card.Header
          style={headerStyle}
          onMouseEnter={() => setUnderlineStyle({ ...underlineStyle, visibility: 'visible', width: '100%' })}
          onMouseLeave={() => setUnderlineStyle({ ...underlineStyle, visibility: 'hidden', width: '0' })}
        >
          <span style={{ position: 'relative', color: '#1cb9ed' }}>{disasterDetails.type}</span>
          <div style={spanUnderlineStyle}></div>
        </Card.Header>
        <Button onClick={todo} style={{ position: 'absolute', top: '10px', right: '10px', background: 'green', border: 'none', color: 'white', fontFamily: 'Poppins,sans-serif' }}>DONATE</Button>
        <ListGroup variant="flush" style={{ backgroundColor: '#1c1e21' }}>
          <ListGroup.Item style={listItemStyle}>
            <strong>State:</strong> {disasterDetails.state}
          </ListGroup.Item>
          <ListGroup.Item style={listItemStyle}>
            <strong>District:</strong> {disasterDetails.district}
          </ListGroup.Item>
          <ListGroup.Item style={listItemStyle}>
            <strong>Town:</strong> {disasterDetails.town}
          </ListGroup.Item>
          <ListGroup.Item style={listItemStyle}>
            <strong>Description:</strong> {disasterDetails.desc}
          </ListGroup.Item>
          <ListGroup.Item style={{ ...listItemStyle, ...redTextStyle, background: '#1c1e21' }}>
            <strong>DII:</strong> {disasterDetails.DII}
          </ListGroup.Item>
          <ListGroup.Item style={listItemStyle}>
            <strong>Time of occurrence:</strong> {disasterDetails.time}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default DisasterDetailsList1;
