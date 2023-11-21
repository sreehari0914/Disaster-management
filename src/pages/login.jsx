import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import logo1 from '../images/logo1.png';
import img from '../images/Welcome-rafiki.png';

const Login1 = () => {
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
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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
      if (user && session) navigate("/contact");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <Container fluid style={outermostContainerStyle}>
      <Container style={pageContainerStyle}>
      <Row style={{ display: 'flex', height: '100%' }}>
        <Col xs={12} md={6}>
          <img
            className="d-block w-100"
            src={img}
            style={{ maxWidth: '100%' }}
            alt="Welcome Image"
          />
        </Col>

        {/* Right Side (Login UI) */}
        <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '40%', alignItems: 'flex-end' }}>
          <Container style={{ backgroundColor: '#2b3035', height: '100vh' }}>
            <Form style={{ padding: '12px', borderRadius: '10px', color: '#e6e7fc' }}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={logo1}
                  alt="Logo"
                  style={{ width: '16rem', height: '16rem' }}
                />
              </div>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: '15px' }} ref={emailRef} required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" style={{ marginBottom: '15px' }} ref={passwordRef} required />
              </Form.Group>

              {errorMsg && (
                <Alert
                  variant="danger"
                  onClose={() => setErrorMsg("")}
                  dismissible>
                  {errorMsg}
                </Alert>
              )}

              <Button
                disabled={loading}
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  height: '50px',
                  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                  border: 'none',
                  color: '#e6e7fc',
                  padding: '15px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '15px',
                }}
              >
                <strong>LOGIN</strong>
              </Button>

              <p style={{ marginTop: '15px', textAlign: 'center', color: '#e6e7fc', fontSize: '14px' }}>
                Don't have an account? <Link to="#" style={{ color: '#2f21d9', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }}>Sign up</Link>
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
  height: '99vh',
  backgroundColor: '#2b3035',
  marginTop: '2rem',
};

const pageContainerStyle = {
  border: '2px solid #2b3035',
  borderRadius: '10px',
  overflow: 'hidden',
  maxWidth: '95%',
  margin: 'auto',
};

export default Login1;