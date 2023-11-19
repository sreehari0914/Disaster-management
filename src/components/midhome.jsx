import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MiddlePage = () => {
  return (
    <Container fluid style={{ backgroundColor: '#2b3035', color: '#fff' }}>
      <Row>
        <Col md={12}>
          <h1 style={{ color: '#5c79e0' }}>Aid Connect: Connecting Relief Organizations and Communities</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="/images/group-helping-community.jpg" alt="Group helping community" />
        </Col>
        <Col md={6}>
          <p>Aid Connect is a disaster management website that connects relief organizations and communities in need. We provide a platform for organizations to share their resources and expertise, and for communities to request assistance. We also provide information and resources to help communities prepare for and respond to disasters.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#5c79e0' }}>Our Functionalities</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="/images/person-using-computer.jpg" alt="Person using computer" />
        </Col>
        <Col md={6}>
          <ul>
            <li>A searchable database of relief organizations.</li>
            <li>A tool for organizations to share their resources and expertise.</li>
            <li>A platform for communities to request assistance.</li>
            <li>Information and resources to help communities prepare for and respond to disasters.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#5c79e0' }}>How to Get Involved</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="/images/group-volunteering.jpg" alt="Group volunteering" />
        </Col>
        <Col md={6}>
          <p>There are many ways to get involved with Aid Connect.</p>
          <ul>
            <li>Relief organizations can create a profile on our website to share their resources and expertise.</li>
            <li>Communities can request assistance through our website or by contacting us directly.</li>
            <li>Individuals can volunteer their time or donate to our organization.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#5c79e0' }}>Together, we can make a difference.</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="/images/community-recovering.jpg" alt="Community recovering" />
        </Col>
        <Col md={6}>
          <p>We believe that everyone has a role to play in disaster relief. By working together, we can help communities in need recover from disasters and build a more resilient future.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 style={{ color: '#5c79e0' }}>Contact Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>If you have any questions or would like to get involved with Aid Connect, please contact us at [email protected]</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MiddlePage;
