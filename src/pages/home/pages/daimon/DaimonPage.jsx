import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DaimonPage.css";
import ML from "../../../../images/machine-learning-daimon-page.svg";
import daimonNew from "../../../../images/daimon-new-logo.png";
import useScrollToTopOnReload from "../../../../components/useSccrollToTopOnReload";
import dss from "../../../../images/dss.png";

const DaimonPage = () => {
  useScrollToTopOnReload();
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  };

  const { ref: ref1, inView: inView1 } = useInView(options);
  const { ref: ref2, inView: inView2 } = useInView(options);
  const { ref: ref3, inView: inView3 } = useInView(options);
  const controls = useAnimation();
  const [showContent, setShowContent] = useState(false);
  const titleControl = useAnimation();
  const parControl = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 2,
        transition: { duration: 4 },
      });
      await controls.start({
        top: "0%",
        transform: "translate(0, -32vh)",
        transition: { duration: 3, ease: "easeInOut" },
      });
      await titleControl.start({
        opacity: 1,
        top: "0%",
        transform: "translate(0, -4vh)",
        transition: { duration: 3, ease: "easeInOut" },
      });
      await parControl.start({
        opacity: 1,
        top: "50%",
        transform: "translate(0, 6vh)",
        transition: { duration: 3, ease: "easeInOut" },
      });
      setShowContent(true);
    };
    sequence();
  }, [controls, titleControl, parControl]);
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Container fluid>
      <Row className="vh-80">
        <Col xs={10} className="loading-log-center">
          <motion.div
            id="position-animation"
            initial={{ opacity: 0, top: "0%" }}
            animate={controls}
          >
            <Row className="first-animated-row align-items-center justify-content-center">
              <Col xs={5} md={2}>
                <img
                  src={ML}
                  alt="TU Clausthal+Machine learning"
                  className="img-fluid ml"
                />
              </Col>
              <Col xs={5} md={5}>
                <img
                  className="img-fluid daimon-image"
                  src={daimonNew}
                  alt="Daimon graphic"
                />
              </Col>
            </Row>
          </motion.div>
          <motion.div
            className="project-name"
            initial={{ opacity: 0, top: "0%" }}
            animate={titleControl}
            style={{ position: "absolute", top: "50%" }}
          >
            <Row>
              <Col>
                <h3>
                  Decision Aid for Marine Munitions: Practical Application
                </h3>
              </Col>
            </Row>
          </motion.div>

          <motion.div
            className="project-explanation"
            initial={{ opacity: 0 }}
            animate={parControl}
            style={{ position: "absolute" }}
          >
            <Col>
              <Row>
                <p>
                  The Baltic Sea harbors a grim legacy of approximately 50,000
                  tons of chemical warfare agents and at least 200,000 tons of
                  conventional munitions from World Wars I and II. Additionally,
                  around 45,000 tons of CWAs and 200,000 tons of conventional
                  munitions were dumped off the coast of Norway in Skagerrak,
                  with another 20,000 tons of CWAs near Måseskär, Sweden. These
                  underwater munitions constantly release contaminants due to
                  shell corrosion and human disturbances. The DAIMON project
                  (2016-2019), with a budget of 4.7 million EUR and
                  part-financed by the EU INTERREG Baltic Sea Region Programme,
                  addressed the contentious issue of how to manage these
                  underwater warfare objects. They developed decision-aid tools
                  to assist Baltic Sea Region governments and companies in
                  making informed, case-specific decisions.
                </p>
              </Row>
            </Col>
          </motion.div>
        </Col>
      </Row>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          {/* Additional content rows */}
          <Row className="my-0 justify-content-md-center">
            <Col md={7} ref={ref1}>
              <Row>
                <Col>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                      inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <h3>Decision Support System (DSS) for marine munitions </h3>
                  </motion.div>
                </Col>
              </Row>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={
                  inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{ delay:1, duration: 0.5 }}
              >
                <p>
                  The DAIMON project, running from 2016 to 2019 with a budget of
                  4.7 million EUR and part-financed by the EU INTERREG Baltic
                  Sea Region Programme, tackled the pressing issue of underwater
                  munitions in the Baltic Sea. With approximately 50,000 tons of
                  chemical warfare agents and at least 200,000 tons of
                  conventional munitions from World Wars I and II dumped in the
                  Baltic Sea, the project sought to address the ongoing release
                  of contaminants due to corrosion and human disturbance. DAIMON
                  developed a suite of decision-aid tools to assist governments
                  and companies in making informed decisions about marine
                  munitions management. These tools included a Decision Support
                  System (DSS), a comprehensive munitions database, an EcoTox
                  Toolbox for detecting warfare agents, and various management
                  strategies. The follow-up project, DAIMON 2, aimed to
                  popularize these tools and train administrative end-users,
                  ensuring widespread practical application and enhancing the
                  safety and environmental health of the Baltic Sea region.
                </p>
              </motion.div>
            </Col>
            <Col md={2}>
              <img src={dss} alt="Example" />
            </Col>
          </Row>
          <Row className="my-1 justify-content-md-center">
            <Col md={7} ref={ref2}>
              <Row>
                <Col>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={
                      inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <h3>Baltic Sea Munitions Database</h3>
                  </motion.div>
                </Col>
              </Row>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={
                  inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{ delay:1, duration: 0.5 }}
              >
                <p>
                  The Clausthal University of Technology, in collaboration with
                  Dr. Koehler GmbH, has developed a specialist software designed
                  to manage complex data about munitions objects in the Baltic
                  Sea. This software allows munitions experts, scientists, and
                  practitioners involved in Baltic Sea exploration to
                  conveniently input, retrieve, or update information on newly
                  discovered objects through a user-friendly interface. The
                  resulting Munitions Database securely stores detailed
                  information on dumped munitions and is hosted within the
                  integrated oceanographic system ZSPDO. Available free of
                  charge to registered users, this database can be accessed
                  through the provided link. For login rights or further
                  inquiries, please contact Prof. Dr. Sven Hartmann at the
                  Clausthal University of Technology.
                </p>
              </motion.div>
            </Col>
            <Col md={2}>
              <img src="https://via.placeholder.com/400" alt="Example" />
            </Col>
          </Row>
          <Row className="my-2 justify-content-md-center">
            <Col md={7} ref={ref3}>
              <Row>
                <Col>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <h3>Catalogue of Baltic Sea dumped munitions' types</h3>
                  </motion.div>
                </Col>
              </Row>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={
                  inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{delay:1, duration: 0.5 }}
              >
                <p>
                  The Polish Naval Academy in Gdynia, in collaboration with
                  other DAIMON partners, has developed an online catalogue of
                  all types of munitions resting on the Baltic Sea floor.
                  Registered users can access and filter data through
                  multi-attribute database queries. The catalogue, accessible
                  here, covers both chemical and conventional munitions dumped
                  after World War II. It aims to enhance knowledge about these
                  munitions and identify pieces found during economic activities
                  such as fishing, construction, and dredging. Users can search
                  for munitions based on weapon type, calibre, and country of
                  origin, with additional detailed information available in
                  separate documents where applicable. For login rights or
                  further inquiries, please contact Bartłomiej Pączek. For GIS
                  information system access, including DAIMON and CHEMSEA
                  results, use the provided link.
                </p>
              </motion.div>
            </Col>
            <Col md={2}>
              <img src="https://via.placeholder.com/400" alt="Example" />
            </Col>
          </Row>
        </motion.div>
      )}
    </Container>
  );
};

export default DaimonPage;
