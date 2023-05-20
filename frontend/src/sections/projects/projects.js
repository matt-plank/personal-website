import { useEffect, useState } from "react";
import TechnologyIcon from "../../components/TechnologyIcon/TechnologyIcon";
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
        {cards.map((card, i) => {
          return (
            <div className="card" key={i}>
              <div className="title">
                <img
                  src={`${API_ROOT}/api/files/${card.imageFileName}`}
                  alt=""
                />
                <h3>{card.name}</h3>
              </div>
              <div className="content">
                <div className="tech">
                  {card.technologies.map((technology, i) => {
                    return (
                      <TechnologyIcon
                        name={technology.name}
                        link={technology.link}
                        key={i}
                      />
                    );
                  })}
                </div>
                <p>{card.description}</p>
                <a href={card.link} target="_blank" rel="noreferrer">
                  <button className="button">View</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
