import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import headerImg from '../assets/img/Perfil.webp';
import { useTranslation } from 'react-i18next';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Full Stack Developer'];
  const period = 200;
  const [t, ] = useTranslation("global");

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta, index, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">{t("banner.welcome")}</span>
                  <h1 className='title'>{t("banner.hello")}</h1>
                  <h2 className='title'>{t("banner.am")}</h2>
                  <p className="text-white">
                  {t("banner.description")}
                  </p>
                  <p className="text-white">
                  {t("banner.description2")}
                  </p>
                  <div className="icons-container">
                    <a href="mailto:maximoortelli@hotmail.com"><AiOutlineMail className="icon" /></a>
                    <a href="https://wa.me/5492235809709"><FaWhatsapp className="icon" /></a>
                  </div>
                  <a className="letscon" href="#connect">
                  {t("banner.connect")}
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img className='perfil' src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
