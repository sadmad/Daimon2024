import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DaimonPage.css";
import ML from "../../../../images/machine-learning-daimon-page.svg";
import daimonNew from "../../../../images/daimon-new-logo.png";
import useScrollToTopOnReload from "../../../../components/useSccrollToTopOnReload";
import posts from "./posts" //array of the post at the end of the page
import PostGenerator from "../../components/postGenerator/PostGenerator"

const DaimonPage = () => {
  useScrollToTopOnReload();
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  };

/*   const { ref: ref1, inView: inView1 } = useInView(options);
  const { ref: ref2, inView: inView2 } = useInView(options);
  const { ref: ref3, inView: inView3 } = useInView(options); */
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
          transition={{ duration: 1 }}
        >
          {/* Additional content rows */}
          
        {posts.map((post, index)=> (
          <PostGenerator
            key={index}
            title={post.title}
            img={post.img}
            alt={post.alt}
            text={post.text} />
        ))}
          
        </motion.div>
      )}
    </Container>
  );
};

export default DaimonPage;
