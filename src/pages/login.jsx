import React, { useEffect, useState,useRef } from 'react';
import { Container, Row, Col, Form, Button, Carousel, Navbar, Nav } from 'react-bootstrap';

import { Alert,  Card,  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import logo1 from '../images/logo1.jpg';

const PageContainer = {
  border: '2px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  maxWidth: '80%', // Set maximum width for the container
  margin: 'auto', // Center the container
};

const Login1 = () => {
  



  useEffect(() => {
    // Disable scrolling when the component mounts
    //document.body.style.overflow = 'hidden';

    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.backgroundColor = '#2b3035';
    };
  }, []);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };


  return (
    <Container fluid style={outermostContainerStyle}>
      

      <Container style={PageContainer}>
        <Row style={fullHeightStyle}>
          <Col xs={12} md={6}>
            {/* Carousel for Images */}
            <Carousel activeIndex={index} onSelect={handleSelect} style={carouselStyle} interval={3000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2FzdGVyfGVufDB8fDB8fHww"
                  alt="First slide"
                  style={{ maxWidth: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1617252820855-a829ba1babe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Second slide"
                  style={{ maxWidth: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWwlMjBkaXNhc3RlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Third slide"
                  style={{ maxWidth: '100%' }}
                />
              </Carousel.Item>
              {/* Add more Carousel.Items as needed */}
            </Carousel>
            {/* Add more Carousel.Items as needed */}
          </Col>

          {/* Right Side (Login UI) */}
          <Col xs={12} md={6} style={loginColStyle}>
            <Container style={formContainerStyle}>
            <h2 style={{ color: '#dcdef2', textAlign: 'center', marginTop: '2rem', fontFamily: 'cursive' }}>AID CONNECT</h2>

              <Form  style={formStyle}>
                <div style={{ textAlign: 'center' }}>
                  <img
                   src={logo1}// Replace with the actual URL of your image
                    alt="Logo"
                    style={{ width: '16rem', height: '16rem',  }} // Adjust width and height as needed
                  />
                </div>

                

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={inputStyle} ref={emailRef} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" style={inputStyle} ref={passwordRef} required />
                </Form.Group>
                {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}

                <Button disabled={loading} onClick={handleSubmit}
                  style={{
                    ...signUpButtonStyle,
                    height: buttonStyle.height,
                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                  }}
                >
                  <strong>LOGIN</strong>
                </Button>

                {/* Sign Up Button */}
                <p style={{ marginTop: '15px', textAlign: 'center', color: '#e6e7fc', fontSize: '14px' }}>
                  Don't have an account? <a href="#" style={signUpLinkStyle}>Sign up</a>
                </p>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const outermostContainerStyle = {
  // overflow: 'hidden',
  height: '99vh',
  backgroundColor: '#2b3035', // Set the background color to white
  // boxShadow: '0px 4px 8px rgba(255, 255, 255, 1.2)', // Box shadow for the outer container with white color
  marginTop: '2rem',
};

const fullHeightStyle = {
  display: 'flex',
};

const carouselStyle = {
  height: '90vh',
  objectFit: 'cover',
  objectPosition: '0 80%',
  width: '100%', // Change to 'cover'
};

const loginColStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  alignItems: 'flex-end', // Align items to the bottom
};

const formContainerStyle = {
  backgroundColor: '#2b3035',
  boxShadow: '0px 4px 8px rgba(255, 255, 255, 1.2)',
  height: '99vh',
};

const formStyle = {
  padding: '12px',
  borderRadius: '10px',
  color: '#e6e7fc',
  marginTop: '5rem',
};

const headerStyle = {
  fontSize: '2em',
  marginBottom: '20px',
  textAlign: 'center',
};

const inputStyle = {
  marginBottom: '15px',
};

const buttonStyle = {
  width: '100%',
  height: '50px', // Adjust the height as needed
  background: '#bfc2ff',
  border: 'none',
  color: '#bfc2ff',
  padding: '15px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const signUpButtonStyle = {
  marginTop: '15px',
  width: '100%',
  color: '#e6e7fc',
};

const navLinkStyle = {
  fontSize: '16px', // Adjust the font size as needed
  padding: '15px', // Adjust the padding as needed
  color: '#e6e7fc',
  // transition: 'color 0.3s ease-in-out'
};
const signUpLinkStyle = {
  color: '#2f21d9',
  fontSize: '14px',
  textDecoration: 'underline',
  cursor: 'pointer',
};

export default Login1;