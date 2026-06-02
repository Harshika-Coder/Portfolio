import { useState, useEffect } from "react";
import "./style.css";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map((doc) => doc.data());
        if (projectsData.length > 0) {
          setProjects(projectsData);
        } else {
          // Fallback to static data
          setProjects([
            {
              title: "Calculator App",
              problem:
                "Need a simple tool for performing basic arithmetic calculations in real-time.",
              solution:
                "Built with HTML, CSS, and JavaScript — performs real-time calculations with a clean UI.",
              link: "https://harshika-coder.github.io/Calculator/",
            },
            {
              title: "Photo Gallery",
              problem:
                "Require an efficient way to manage and display a collection of images.",
              solution:
                "A responsive photo gallery app built with React, allowing users to browse and view images effectively.",
              link: " https://harshika-coder.github.io/Photo-Gallery/",
            },
            {
              title: "Tic Tac Toe Game",
              problem:
                "Create an interactive game for two players to enjoy the classic Tic-Tac-Toe.",
              solution:
                "A classic Tic-Tac-Toe game built with interactive UI and efficient game logic using JavaScript.",
              link: "https://harshika-coder.github.io/tic-tac-toe-game/",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback
        setProjects([
          {
            title: "Calculator App",
            problem:
              "Need a simple tool for performing basic arithmetic calculations in real-time.",
            solution:
              "Built with HTML, CSS, and JavaScript — performs real-time calculations with a clean UI.",
            link: "https://harshika-coder.github.io/Calculator/",
          },
          {
            title: "To-Do List",
            problem:
              "Require an efficient way to manage daily tasks with add, edit, and delete functionality.",
            solution:
              "A responsive To-Do List app built with React, allowing users to manage tasks effectively.",
            link: "https://harshika-coder.github.io/TODO-List-/",
          },
          {
            title: "Tic Tac Toe Game",
            problem:
              "Create an interactive game for two players to enjoy the classic Tic-Tac-Toe.",
            solution:
              "A classic Tic-Tac-Toe game built with interactive UI and efficient game logic using JavaScript.",
            link: "https://harshika-coder.github.io/Game/",
          },
        ]);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>
              <strong>Solution:</strong> {project.solution}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
