import React from "react";
import supportimg from "../../images/1_coffee-n.webp";
import food from "../../images/kofe-al-types.webp";
import "./destek.css";

const Destek = () => {
  return (
    <div className="container">
      <div className="row destek">
        <div className="col-lg-12 col-xl-5 col-12 left-side-support">
          <img src={supportimg} alt="kofealimage" />
        </div>
        <div className="col-lg-12 col-xl-6 col-12 right-side-support">
          <div className="content-sup">
            <span>DƏSTƏK AL</span>
            <h4>Bəxşiş qəbul edin</h4>
            <p>
              Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları və bəxşiş
              almaq üçün unikal, əyləncəli və bəsit bir metodu təqdim edir!
              Kofealdan bəxşiş qutusu kimi istifadə edərək, dəstəkçilərinizin
              məşğuliyyətinizə töhfə verməsinə imkan verə bilərsiniz.
            </p>
            <div>
              <img src={food} alt="split Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destek;
