import "./style.css";
import homeLogo from "./assets/Home-logo.png";

function Navbar() {
  return (
    <div id="header">
      <nav>
        <div className="right">Harshika's Portfolio</div>
        <div>
          <img src={homeLogo} alt="Home" style={{ width: "50px" }} />
        </div>
        <div className="left">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#recommendations">Recommendations</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
