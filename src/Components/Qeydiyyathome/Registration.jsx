import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./registration.css";

const Registration = () => {
  return (
    <div>
      
        <div className="row">
          <div className="col-lg-12 registr">
            <div className="registr-text-center">
              <h2>Yaradıcı Şəxslər üçün unikal dəstək platforma.</h2>
              <h4>Yarat 🎉 Paylaş 🚀 Qazan ☕</h4>

              <Link>
                <button>jsdfg</button>
                <FontAwesomeIcon icon={faArrowRight} />
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Registration;
