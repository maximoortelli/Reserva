import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { MailchimpForm } from './MailchimpForm';

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <MailchimpForm />
        <Col size={12} sm={6}>
          <a href="/" className="text-decoration-none"><h1 className="text-white my mt-n3 mb-5 logo">Maximo Ortelli</h1></a>
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="icons-container other">
            <a href="mailto:maximoortelli@hotmail.com">
              <AiOutlineMail className="icon" />
            </a>
            <a href="https://wa.me/5492235809709">
              <FaWhatsapp className="icon" />
            </a>
          </div>
          <p>Copyright 2023. 223 Records All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
