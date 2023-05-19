import { useEffect, useState } from "react";
import {
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTerraform,
} from "react-icons/si";
import { API_ROOT } from "../../config/config";
import "./projects.css";

const Projects = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const requestCards = async () => {
      const response = await fetch(`${API_ROOT}/api/projects`);
      const data = await response.json();

      setCards(data);
    };

    requestCards();
  }, []);

  return (
    <div className="section projects">
      <h2>Projects</h2>

      <div className="cards">
        {cards.map((card) => {
          return (
            <div className="card">
              <div className="title">
                <img
                  src={`${API_ROOT}/api/files/${card.imageFileName}`}
                  alt=""
                />
                <h3>{card.name}</h3>
              </div>
              <div className="content">
                <div className="tech">
                  <SiPython />
                  <SiDjango />
                  <SiNodedotjs />
                  <SiReact />
                  <SiTerraform />
                </div>
                <p>{card.description}</p>
                <button className="button">View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
