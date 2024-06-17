import { Link } from "react-router-dom";
import "./secBlock.css";
import interreg from "../../../images/interreg_baltic_sea_region.jpg";
import amucad from "../../../images/AmuCad_logo_crown_blue_500.png";
import daimon from "../../../images/daimon2.png";
const SecBlock = () => {
  let img = [interreg, amucad, daimon];
  return (
    <>
      <div className="container-block d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={img[0]}></img>
          </div>
          <div className="content">
            <h2>Interreg</h2>
            <p>
              Decision Aid for Marine Munitions: Practical Application was an
              international applied-science project consisting of partners from
              Poland, Germany, Sweden, Finland and Norway collaborating with
              experts worldwide, united by the goal of solving the problem of
              underwater munitions. Its budget was roughly 900k EUR and was
              part-financed by the EU INTERREG Baltic Sea Region Programme
              2014-2020.
            </p>
            <a
              className="btn btn-outline-secondary"
              href="https://interreg-baltic.eu/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={img[1]}></img>
          </div>
          <div className="content">
            <h2>Ammunition Cadastre Sea</h2>
            <p>
              EGEOS participates in national and international research projects
              on submerged munitions. Results from these projects are integrated
              into the "Ammunition Cadastre Sea" (AMUCAD).
            </p>
            <a
              className="btn btn-outline-secondary"
              href="https://www.amucad.org/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={img[2]}></img>
          </div>
          <div className="content">
            <h2>Daimon 2</h2>
            <p>
              The DAIMON2 project optimized tools for maritime and environmental
              authorities, enabling more accurate and cost-effective decisions
              on managing dumped munitions.
            </p>
            <Link
              className="btn btn-outline-secondary"
              to="/DaimonPage"
              role="button"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecBlock;
