import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DaimonPage.css";
import ML from "../../../../images/machine-learning-daimon-page.svg";
import daimonNew from "../../../../images/daimon-new-logo.png";
import useScrollToTopOnReload from "../../../../components/useSccrollToTopOnReload";
const DaimonPage = () => {
  useScrollToTopOnReload();
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  };

  const { ref: ref1, inView: inView1 } = useInView(options);
  const { ref: ref2, inView: inView2 } = useInView(options);
  const { ref: ref3, inView: inView3 } = useInView(options);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    moveToTop: {
      top: "10%",
      transition: {
        duration: 2,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 4,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container>
      <Row className="first-animated-row">
        {/* Here load the daimon page logo  */}
        <Col>
          <motion.div
            className="o2"
            variants={containerVariants}
            initial="hidden"
            animate={["visible", "moveToTop"]}
          >
            <img src={ML} alt="Daimon part of Logo" className="img-fluid" />
          </motion.div>
        </Col>
        {/* The rest of the logo load from here */}
        <Col xs={10}>
          <motion.div
            className="daimon-block"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <img className="img-fluid" src={daimonNew} alt="Daimon graphic" />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <motion.div
          className="project-name"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Decision Aid for Marine Munitions: Practical Application</h2>
        </motion.div>
        <motion.div
          className="project-explaination"
          variants={textVariants}
          initial={"hidden"}
          animate="visible"
        >
          <p>
            The Baltic Sea harbors a grim legacy of approximately 50,000 tons of
            chemical warfare agents and at least 200,000 tons of conventional
            munitions from World Wars I and II. Additionally, around 45,000 tons
            of CWAs and 200,000 tons of conventional munitions were dumped off
            the coast of Norway in Skagerrak, with another 20,000 tons of CWAs
            near Måseskär, Sweden. These underwater munitions constantly release
            contaminants due to shell corrosion and human disturbances. The
            DAIMON project (2016-2019), with a budget of 4.7 million EUR and
            part-financed by the EU INTERREG Baltic Sea Region Programme,
            addressed the contentious issue of how to manage these underwater
            warfare objects. They developed decision-aid tools to assist Baltic
            Sea Region governments and companies in making informed,
            case-specific decisions.
          </p>
        </motion.div>
      </Row>

      {/* from here we have the content of the page */}
      <Row className="my-5">
        <Col ref={ref1}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Decision Support System (DSS) for marine munitions </h3>
            <p>
              The DAIMON project, running from 2016 to 2019 with a budget of 4.7
              million EUR and part-financed by the EU INTERREG Baltic Sea Region
              Programme, tackled the pressing issue of underwater munitions in
              the Baltic Sea. With approximately 50,000 tons of chemical warfare
              agents and at least 200,000 tons of conventional munitions from
              World Wars I and II dumped in the Baltic Sea, the project sought
              to address the ongoing release of contaminants due to corrosion
              and human disturbance. DAIMON developed a suite of decision-aid
              tools to assist governments and companies in making informed
              decisions about marine munitions management. These tools included
              a Decision Support System (DSS), a comprehensive munitions
              database, an EcoTox Toolbox for detecting warfare agents, and
              various management strategies. The follow-up project, DAIMON 2,
              aimed to popularize these tools and train administrative
              end-users, ensuring widespread practical application and enhancing
              the safety and environmental health of the Baltic Sea region.
            </p>
            <img src="https://via.placeholder.com/400" alt="Example" />
          </motion.div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col ref={ref2}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Baltic Sea Munitions Database</h3>
            <p>
              The Clausthal University of Technology, in collaboration with Dr.
              Koehler GmbH, has developed a specialist software designed to
              manage complex data about munitions objects in the Baltic Sea.
              This software allows munitions experts, scientists, and
              practitioners involved in Baltic Sea exploration to conveniently
              input, retrieve, or update information on newly discovered objects
              through a user-friendly interface. The resulting Munitions
              Database securely stores detailed information on dumped munitions
              and is hosted within the integrated oceanographic system ZSPDO.
              Available free of charge to registered users, this database can be
              accessed through the provided link. For login rights or further
              inquiries, please contact Prof. Dr. Sven Hartmann at the Clausthal
              University of Technology.
            </p>
            <img src="https://via.placeholder.com/400" alt="Example" />
          </motion.div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Catalogue of Baltic Sea dumped munitions' types</h3>
            <p>
              The Polish Naval Academy in Gdynia, in collaboration with other
              DAIMON partners, has developed an online catalogue of all types of
              munitions resting on the Baltic Sea floor. Registered users can
              access and filter data through multi-attribute database queries.
              The catalogue, accessible here, covers both chemical and
              conventional munitions dumped after World War II. It aims to
              enhance knowledge about these munitions and identify pieces found
              during economic activities such as fishing, construction, and
              dredging. Users can search for munitions based on weapon type,
              calibre, and country of origin, with additional detailed
              information available in separate documents where applicable. For
              login rights or further inquiries, please contact Bartłomiej
              Pączek. For GIS information system access, including DAIMON and
              CHEMSEA results, use the provided link.
            </p>
            <img src="https://via.placeholder.com/400" alt="Example" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default DaimonPage;
