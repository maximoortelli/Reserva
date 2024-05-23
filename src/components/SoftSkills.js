import Carousel from "react-multi-carousel";
import meter3 from "../assets/img/meter90.png";
import meter4 from "../assets/img/meter95.png";
import meter5 from "../assets/img/meter97.png";
import meter6 from "../assets/img/meter98.png";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';

export const SoftSkills = () => {
  const [t,  ] = useTranslation("global");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bars" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{t("skills2.title")}</h2>
              <p className="text-white mt-4 mb-5">
                 {t("skills2.description")}
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter5} alt="stadistic" />
                  <h5>{t("skills2.communication")}</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="stadistic" />
                  <h5>{t("skills2.teamwork")}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="stadistic" />
                  <h5>{t("skills2.adaptability")}</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="stadistic" />
                  <h5>{t("skills2.critical")}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="stadistic" />
                  <h5>{t("skills2.interpersonal")}</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="stadistic" />
                  <h5>{t("skills2.continuous")}</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="stadistic" />
                  <h5>{t("skills2.creativity")}</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="stadistic" />
                  <h5>{t("skills2.attetion")}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="stadistic" />
                  <h5>{t("skills2.problem")}</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="stadistic" />
                  <h5>{t("skills2.responsability")}</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="stadistic" />
                  <h5>{t("skills2.dedicated")}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="stadistic" />
                  <h5>{t("skills2.time")}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
