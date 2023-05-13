import "./app.css";
import CV from "./sections/cv/cv";
import Projects from "./sections/projects/projects";
import Title from "./sections/title/title";

function App() {
  return (
    <>
      <Title />
      <Projects />
      <CV />
    </>
  );
}

export default App;
