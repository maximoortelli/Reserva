import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const [t,  ] = useTranslation("global");
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({
          success: false,
          message: 'Something went wrong, please try again later.',
        });
      }
    } catch (error) {
      console.error('Error in fetch:', error);
      setStatus({
        success: false,
        message: 'Failed to send message. Please try again.',
      });
    } finally {

    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2 className='text-center'>{t("contact.title")}</h2>
                  <p>Reservá un turno llenando este formulario y nos comunicaremos.</p>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          className=""
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Nombre"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          className=""
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Apellido"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          className=""
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          className=""
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Telefono"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1 text-center">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Cuentenos un poco sobre usted o su idea a trabajar..."
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        />
                        <button className="" type="submit">
                          <span>{t("contact.button")}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? 'danger' : 'success'
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

