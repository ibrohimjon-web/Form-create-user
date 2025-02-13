import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const count = useSelector((state) => state.user.value);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <img src={Logo} alt="Logotip Img" className="logo" />
      </div>

      <div className={`links-wrapper ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="link">
            <Link to={"/"} className="active">
              Home
            </Link>
          </li>
          <li className="link">
            <a href="">Careers</a>
          </li>
          <li className="link">
            <a href="">Blog</a>
          </li>
          <li className="link">
            <Link to={"/users"}>
              All user <sup>{count.length}</sup>
            </Link>
          </li>
          <li className="link">
            <a href="">Onboarding</a>
          </li>
        </ul>
        <button className="now-btn">Enroll Now</button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
