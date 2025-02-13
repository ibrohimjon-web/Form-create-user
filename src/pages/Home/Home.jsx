import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/createSlice";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import Person from "../../assets/person.png";
import H1 from "../../assets/h1.png";
import H2 from "../../assets/h2.png";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !email || !password || !gender) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      surname,
      email,
      gender,
    };

    dispatch(addUser(newUser));

    // Maydonlarni tozalash
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setGender("");
  };

  return (
    <div className="home-wrapper">
      <div className="home-left">
        <form onSubmit={handleSubmit}>
          <h2 className="logo">Your logo</h2>
          <h2 className="login">Login</h2>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter your surname"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@gmail.com"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button type="submit" className="sigin-btn">
            Sign in
          </button>

          <a href="#">or continue with</a>

          <div className="icons-wrapper">
            <div className="google">
              <FcGoogle />
            </div>
            <div className="github">
              <FaGithub />
            </div>
            <div className="facebook">
              <RiFacebookCircleFill />
            </div>
          </div>

          <div className="terms-and-conditions">
            <a href="#">Don’t have an account yet?</a>
          </div>
        </form>
      </div>

      <div className="home-right">
        <img className="person" src={Person} alt="person" />
        <img className="bir" src={H1} alt="h1" />
        <img className="ikki" src={H2} alt="h2" />
      </div>
    </div>
  );
};

export default Home;
