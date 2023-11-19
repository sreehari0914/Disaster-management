import React, { useEffect, useState,useRef } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
//import logo1 from './images/logo1.jpg';
import { Alert,  Card } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import logo1 from '../images/logo1.jpg';


const pageContainerStyle = {
  border: '2px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  maxWidth: '80%', // Set maximum width for the container
  margin: 'auto', // Center the container
};

const SignUp = () => {
  
  
  useEffect(() => {
    // Disable scrolling when the component mounts
    //document.body.style.overflow = 'hidden';

    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.backgroundColor = '#2b3035'; 
    };
  }, []);
  const [index, setIndex] = useState(0);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const register = (email, password) =>
    supabase.auth.signUp({ email, password });
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
          !passwordRef.current?.value ||
          !emailRef.current?.value ||
          !confirmPasswordRef.current?.value
        ) {
          setErrorMsg("Please fill all the fields");
          return;
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          setErrorMsg("Passwords doesn't match");
          return;
        }
        try {
          setErrorMsg("");
          setLoading(true);
          const { data, error } = await register(
            emailRef.current.value,
            passwordRef.current.value
          );
          if (!error && data) {
            setMsg(
              "Registration Successful. Check your email to confirm your account"
            );
          }
        } catch (error) {
          setErrorMsg("Error in Creating Account");
        }
        setLoading(false);
      };
    


  return (
    <Container fluid style={outermostContainerStyle}>
      <Container style={pageContainerStyle}>
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
          </Col>

          <Col xs={12} md={6} style={loginColStyle}>
            <Container style={formContainerStyle}>
            <h2 style={{ color: '#dcdef2', textAlign: 'center', marginTop: '2rem', fontFamily: 'cursive' }}>AID CONNECT</h2>

              <Form   style={formStyle}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={logo1}
                    alt="Logo"
                    style={{ width: '16rem', height: '16rem',  }} // Adjust width and height as needed
                  />
                </div>

                

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={inputStyle}   ref={emailRef} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" style={inputStyle} ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" ref={confirmPasswordRef} required />
            </Form.Group>

                {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}

                <Button onClick={handleSubmit} disabled={loading}
                  style={{
                    ...signUpButtonStyle,
                    height: buttonStyle.height,
                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                  }}
                >
                  <strong>LOGIN</strong>
                </Button>

                {/* Sign Up Button */}
                
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
    height:'99vh',
    backgroundColor: '#2b3035', // Set the background color to white
    //boxShadow: '0px 4px 8px rgba(255, 255, 255, 1.2)', // Box shadow for the outer container with white color
    marginTop:'2rem',

  };
  

const fullHeightStyle = {
  display: 'flex',
};

const carouselStyle = {
    height: '90vh',
    objectFit: 'cover', // Change to 'cover'
  };
  

const loginColStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  
};

const formContainerStyle = {
  backgroundColor: '#2b3035',
};

const formStyle = {
  padding: '12px',
  borderRadius: '10px',
  color:'#bd4a4a'
};

const headerStyle = {
  fontSize: '2em',
  marginBottom: '20px',
  textAlign: 'center',
  color:'#bd4a4a'
};

const inputStyle = {
  marginBottom: '15px',
};

const buttonStyle = {
  width: '100%',
  background: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const signUpButtonStyle = {
    marginTop: '15px',
    width: '100%',
    color: '#e6e7fc',
  };

  const signUpLinkStyle = {
    color: 'ffff',
    fontSize: '14px',
    cursor: 'pointer',
  };
  
export default SignUp;