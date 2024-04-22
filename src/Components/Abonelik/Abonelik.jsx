import React from "react";
import mega from "../../images/3-membership.webp";
import "./abonelik.css";

const Abonelik = () => {
  return (
    <div className="container">
      <div className="abone">
        <div className="left-side-abone">
          <img src={mega} alt="megafan" />
        </div>
        <div className="right-side-abone">
          <div className="content-abune">
            <span>DƏSTƏK AL</span>
            <h4>Bəxşiş qəbul edin</h4>
            <p>
              Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları və bəxşiş
              almaq üçün unikal, əyləncəli və bəsit bir metodu təqdim edir!
              Kofealdan bəxşiş qutusu kimi istifadə edərək, dəstəkçilərinizin
              məşğuliyyətinizə töhfə verməsinə imkan verə bilərsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abonelik;
