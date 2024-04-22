import "./header.css";
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbarr">
      <nav className="navbar">
        <div>
          <a href="/" className="navbar-logo">
            <img src={logo} alt="KofeAl" />
          </a>
        </div>
        <ul>
          <li>
            <Link to='/creators'>Üzvlərimiz</Link>
          </li>
          <li>
            <Link to='/Blog'>Bloq</Link>
          </li>
          <li>
            <Link to="/faq">FAQ </Link>
          </li>
        </ul>
        <h2>Azerbaycan</h2>|
        <div>
          <button className="btn-login">Daxil ol</button>
          <button className="btn-register">Qeydiyyat</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
