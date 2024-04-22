import React from "react";
import "./creatorspart.css";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Creatorspart = () => {
  return (
    <div className="creatoritems">
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Veb Dizayn
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Qrafik Dizayn
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Şəxsi inkişaf
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Yazıçılıq
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          İncəsənət
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Blog
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          idman
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
      <div className="creatoritemsimg">
        <Link className="overlay" to="#">
          Musiqi
          <p>
            133 <GoArrowRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Creatorspart;
