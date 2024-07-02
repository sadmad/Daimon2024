import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const PostGenerator = (props) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Row className="my-0 justify-content-md-center">
      <Col md={7} ref={ref}>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{props.title}</h3>
            </motion.div>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView  ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            {props.text}
          </p>
        </motion.div>
      </Col>
      <Col md={2}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <img src={props.img} alt={props.alt} />
        </motion.div>
      </Col>
    </Row>
  );
};

export default PostGenerator;
