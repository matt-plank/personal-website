import { useEffect, useState } from "react";
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
              <div className="content">
                <h3>{card.name}</h3>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  View
                </a>
              </div>

              <img
                src={`${API_ROOT}/api/files/${card.imageFileName}`}
                alt={card.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
