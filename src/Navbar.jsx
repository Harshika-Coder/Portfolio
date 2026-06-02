import "./style.css";
// removed unused/missing home logo import

function Navbar() {
  return (
    <div id="header">
      <nav>
        <div className="right">
          <a href="http://localhost:3000">Harshika's Portfolio</a>
        </div>
        <div className="left">
          <ul>
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
