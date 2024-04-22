import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import React from "react";
import kofe from "../../images/logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="footer-img">
              <img src={kofe} alt="kofeal" />
            </div>
            <p>
              Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq.
              Özünüzü tanıtmaqdan çəkinməyin!
            </p>
            <div className="footer-icons">
              <CiFacebook />
              <FaInstagram />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12 xususi">
            <h5>Xüsusiyyətlər</h5>
            <ul>
              <li>Destek</li>
              <li>Abunəlik</li>
              <li>Mağaza</li>
              <li>QR kodlar</li>
              <li>Patreon Alternativi</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <h5>İnteqrasiyalar</h5>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Telegram</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <h5>Kofeal</h5>
            <ul>
              <li>Haqqimizda</li>
              <li>Qaydalar</li>
              <li>TikTok</li>
              <li>Məxfilik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
