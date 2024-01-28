import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';
import logo1 from '../images/logo1.png';
import img from '../images/Hello-rafiki.png';

const Signup = () => {
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.backgroundColor = '#2b3035';
    };
  }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const register = (email, password) => supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !emailRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg('Please fill all the fields');
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords don't match");
      return;
    }
    try {
      setErrorMsg('');
      setLoading(true);
      const { data, error } = await register(emailRef.current.value, passwordRef.current.value);
      if (!error && data) {
        setMsg('Registration Successful. Check your email to confirm your account');
      }
    } catch (error) {
      setErrorMsg('Error in Creating Account');
    }
    setLoading(false);
  };

  return (
    <Container fluid style={outermostContainerStyle}>
      <Container style={pageContainerStyle}>
        <Row style={fullHeightStyle}>
          <Col xs={12} md={6}>
            <img className="d-block w-100" src={img} alt="First slide" style={carouselStyle} />
          </Col>

          <Col xs={12} md={6} style={loginColStyle}>
            <Container style={formContainerStyle}>

              <Form style={formStyle}>
                <div style={{ textAlign: 'center' }}>
                  <img src={logo1} alt="Logo" style={{ width: '16rem', height: '16rem' }} />
                </div>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={inputStyle} ref={emailRef} required />
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
                  <Alert variant="danger" onClose={() => setErrorMsg('')} dismissible>
                    {errorMsg}
                  </Alert>
                )}

                {msg && (
                  <Alert variant="success" onClose={() => setMsg('')} dismissible>
                    {msg}
                  </Alert>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    ...signUpButtonStyle,
                    height: buttonStyle.height,
                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                  }}
                >
                  <strong>SIGNUP</strong>
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
  height: '99vh',
  backgroundColor: '#2b3035',
  marginTop: '1rem',
};

const pageContainerStyle = {
  border: '2px solid #2b3035',
  borderRadius: '10px',
  overflow: 'hidden',
  maxWidth: '80%',
  margin: 'auto',
};

const fullHeightStyle = {
  display: 'flex',
};

const loginColStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '50%',
};

const formContainerStyle = {
  backgroundColor: '#2b3035',
};

const formStyle = {
  padding: '8px',
  borderRadius: '10px',
  color: '#e6e7fc',
};

const headerStyle = {
  fontSize: '2em',
  marginBottom: '8px',
  textAlign: 'center',
  color: '#e6e7fc',
};

const inputStyle = {
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
  height: '50px',
  background: '#4CAF50',
  border: 'none',
  color: '#e6e7fc',
  padding: '15px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop:'15px',
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

const carouselStyle = {
  height: '90vh',
  objectFit: 'cover',
};

export default Signup;