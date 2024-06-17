import Carousel from "react-bootstrap/Carousel";
import slide1 from '../../../images/slide/1.png'
import slide2 from '../../../images/slide/2.png'
import slide3 from '../../../images/slide/3.png'
import "./Slide.css"

const Slide = () => {
  return (
    <div style={{ display: "block" }}>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="animated-text">Discover the Hidden Threats</h3>
            <p className="animated-text">Exploring the remnants of underwater ammunition and chemicals. Unveiling the dangers lurking beneath the surface.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="animated-text">Advanced Research Techniques</h3>
            <p className="animated-text">Utilizing cutting-edge technology and machine learning to identify and analyze hazardous sites.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="animated-text">A Path to Restoration</h3>
            <p className="animated-text">Working towards a safer, cleaner marine environment through scientific exploration and cleanup efforts.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
