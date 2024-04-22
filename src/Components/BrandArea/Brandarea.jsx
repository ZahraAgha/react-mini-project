import React from "react";
import num500 from "../../images/500.svg";
import startup from "../../images/brand-02.webp";
import forbes from "../../images/brand-05.webp";
import techaz from "../../images/brand-03.webp";
import start from "../../images/brand-06.webp";
import "./brandarea.css"

const Brandarea = () => {
  return (
    <div className="container">
      <div className="row brand">
        <div className="col col-lg-10">
          <span>Bizdən danışırlar</span>
          <ul>
            <li>
              <img className="num5" src={num500} alt="500logo" />
            </li>
            <li>
              <img className="start" src={startup} alt="startuptext" />
            </li>
            <li>
              <img className="forbes" src={forbes} alt="forbes" />
            </li>
            <li>
              <img className="tech" src={techaz} alt="techaz" />
            </li>
            <li>
              <img className="start2" src={start} alt="start" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brandarea;
