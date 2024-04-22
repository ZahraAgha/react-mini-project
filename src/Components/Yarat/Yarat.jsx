import React from "react";
import "./Yarat.css";
import num5 from "../../images/500.svg";

const Yarat = () => {
  return (
    
      <div className="yarat">
        <div className="contentyarat">
          <span>
            Backed by <img src={num5} alt="500" />
            Global
          </span>
          <h1>
            Rəsm çək , sevdiyin işlə məşğul ol, izləyicilərindən dəstək qazan!
          </h1>
          <div>
            <input type="text" placeholder="username" />
            <span className="kofeal">kofe.al</span>
            <button className="btn3" type="submit">
              Yarat
            </button>
          </div>
          <div>
            <h5 class="subtitleyarat">Yarat 🎉 Paylaş 🚀 Qazan ☕</h5>
          </div>
        </div>
      </div>
    
  );
};

export default Yarat;
