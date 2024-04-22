import React from "react";
import "./onlinemagaza.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import magazaimage from "../../images/2-shop.webp";

const Onlinemagaza = () => {
  return (
    <div className="container">
      <div className="row online">
        <div className="col-lg-12 col-xl-6 col-12">
          <div className="contentmagaza">
            <span>ONLAYN MAĞAZA</span>
            <h4>Məhsul və Xidmətlərinizi satın</h4>
            <p class="description">
              Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar
              əlavə edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə
              məhsul və ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!
            </p>
            <h5 class="subtitle mb--20">`Nə satmaq olar?:</h5>
            <div className="plan-list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Fiziki məhsul
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Digital məhsul
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Affiliate məhsul
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Xidmət
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Tədbirə giriş
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Çap işləri
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-5 col-12">
          <img src={magazaimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Onlinemagaza;
