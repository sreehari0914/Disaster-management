import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col } from 'react-bootstrap';
import aid from '../images/Humanitarian Help-cuate (1).png'
import Footer from './footer';
import Middle from './middle';
const LandingPage = () => {
  return (
    <Container fluid style={{ backgroundColor: '#2b3035', minHeight: '100vh' }}>
      <Row className="align-items-center">
        <Col md={6} style={{ paddingRight: '20px' }}>
          <div style={{ paddingLeft: '30px', paddingTop: '50px' }}>
            <h1 style={{ fontSize: '5em', color: '#fff', fontFamily: 'Poppins' }}>
              Welcome  
            </h1>
            <h1 style={{ fontSize: '5em', color: '#fff', fontFamily: 'Poppins' }}>
              to  
            </h1>
            <h1 style={{ fontSize: '5em', color: '#fff', fontFamily: 'Poppins' }}>
               <span style={{ color: '#5c79e0' }}>Aid Connect</span>
            </h1>
            <div style={{ fontSize: '1.5em', color: '#fff', width: '100%' }}>
            <Col md={0}>
          <div style={{ paddingTop: '50px' }}>
            <h2 style={{ color: '#5c79e0', fontFamily: 'Poppins' }}>
              <TypeAnimation
                sequence={[
                  'Aid Connect-Connecting People During Disaster',
                  1000,
                  'Aid Connect-Facilitating Aid & Assistance',
                  1000,
                  'Aid Connect-Uniting Communities Together',
                  1000,
                  'Aid Connect-Helping Hands Together',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </Col>
             
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img
            src={aid}
            alt="Illustration"
            style={{ width: '80%', height: 'auto' }}
          />
        </Col>
        
      </Row>
      <Middle />
      <hr style={{borderTop: '0.1rem solid grey'}} />
      <Footer />
      </Container>
  );
};

export default LandingPage;
