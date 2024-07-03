import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../../../images/TU-Logo_EN-footer.png";
import "./Footer.css";
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="footer-logo justify-content-center">
          <img src={logo} />
        </div>

        <div>
          <a href='https://www.facebook.com/TU.Clausthal/?locale=de_DE' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/tuclausthal/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/school/clausthal-university-of-technology/?originalSubdomain=de' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/sadmad' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="university" className="me-3" />
                Science and Engineering with Energy
              </h6>
              <p>
                TU Clausthal is dedicated to advancing knowledge and fostering
                innovation in science and engineering. With a dynamic and
                energetic environment, the university tackles real-world
                challenges through cutting-edge solutions, preparing graduates
                to make impactful contributions to the global community.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">just a test2
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="https://www.tu-clausthal.de/" className="text-reset">
                  TUC - Home
                </a>
              </p>
              <p>
                <a href="https://www.tu-clausthal.de/studieninteressierte/studiengaenge/master-studiengaenge/informatik" className="text-reset">
                  TUC - Informatics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Claustahl, 37678, Germany
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sre19@tu-clausthal.de
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 49 5323 72 7119
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> -
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TU-Clausthal
        </a>
      </div>
    </MDBFooter>
  );
}
