import "./style.css";
import htmlLogo from "./assets/html-logo.png";
import cssLogo from "./assets/CSS-logo.png";
import jsLogo from "./assets/javascript-logo.png";
import reactLogo from "./assets/React-logo.png";
import mongoDB from "./assets/mongodb-logo.png";
import NodeLogo from "./assets/node-logo.png";
import ExpressLogo from "./assets/Express-logo.png";

function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Node.js", logo: NodeLogo },
    { name: "Express.js", logo: ExpressLogo },
    { name: "MongoDB", logo: mongoDB },
  ];

  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill.logo && <img src={skill.logo} alt={skill.name} />}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
