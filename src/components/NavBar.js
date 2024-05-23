import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  const [t, i18n] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState("spain");
  const [selectedFlag, setSelectedFlag] = useState("../spain.png");
  const [isOpen, setIsOpen] = useState(false);
  const [options, ] = useState([
    { value: "spain", label: "Esp", image: "../spain.png" },
    { value: "germany", label: "Deu", image: "../Flag_of_Germany.svg.png" },
    { value: "japan", label: "Jpn", image: "../Flag_of_Japan.svg.png" },
    { value: "usa", label: "Eng", image: "../usa_flag.png" },
  ]);

  const handleOptionChange = (option, flag) => {
    setSelectedOption(option);
    setSelectedFlag(flag);
    if (option === "usa") {
      i18n.changeLanguage("en");
    } else if (option === "spain") {
      i18n.changeLanguage("es");
    } else if (option === "germany") {
      i18n.changeLanguage("de");
    } else if (option === "japan") {
      i18n.changeLanguage("jp");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <h1 className="cursor-pointer logo">223 Records</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                {t("header.home")}
              </Nav.Link>

            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd">
                  <span>{t("header.connect")}</span>
                </button>
              </HashLink>
            </span>
          
          <div className={`drop-down ${isOpen ? 'open' : ''}`}>
        <div className="wrapper" onClick={toggleMenu}>
          <img src={selectedFlag} className="selectedImg" alt="" />
          <div className="selected">{options.find((opt) => opt.value === selectedOption)?.label}</div>
        </div>
        {isOpen && (
          <div className="list">
            {options.map((opt, index) => (
              <div className="lengcategory" key={index} onClick={() => handleOptionChange(opt.value, opt.image)}>
                <img src={opt.image} alt="flags" className="selectedImg"/>
                <div className="selected text">{opt.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
