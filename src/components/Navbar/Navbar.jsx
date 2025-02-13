import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import Logo from "../../assets/logo.png";

const Navbar = () => {
  const count = useSelector((item) => item.user.value);


  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <img src={Logo} alt="Logotip Img" className="logo" />
      </div>

      <div className="links-wrapper">
        <ul>
          <li className="link">
            <Link to={"/"} className="active">
              Home
            </Link>
          </li>
          <li className="link">
            <a href="" className="link">
              Careers
            </a>
          </li>
          <li className="link">
            <a href="" className="link">
              Blog
            </a>
          </li>
          <li className="link">
            <Link to={"/users"} className="link">
              All user <sup>{count.length}</sup>
            </Link>
          </li>
          <li className="link">
            <a href="" className="link">
              Onboarding
            </a>
          </li>
        </ul>
        <button className="now-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default Navbar;
