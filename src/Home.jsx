import "./style.css";
import harshikaResume from "./assets/Harshika_Resume.pdf";
import webImage from "./assets/web-dev img.png";

function Home() {
  const name = "Harshika Chaurasia";
  return (
    <div className="firstsection">
      <div className="leftsection">
        Hi, My name is <span className="name">{name}</span>
        <div>Full-Stack Web Developer & Problem Solver</div>
        <div>
          Passionate about creating responsive, user-friendly web applications
          and solving complex problems with efficient algorithms.
        </div>
        <div className="highlights">
          <span>🚀 React | Node.js </span>
        </div>
      </div>

      <div className="rightsection">
        <img src={webImage} alt="dev-image" />
        <div id="Attached">
          <button className="btn">
            <a
              href={harshikaResume}
              target="_blank"
              rel="noreferrer noopener"
              download
            >
              Download Harshika's Resume
            </a>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
