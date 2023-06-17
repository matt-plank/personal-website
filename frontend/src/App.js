import "./app.css";
import Contact from "./sections/contact/contact";
import CV from "./sections/cv/cv";
import Projects from "./sections/projects/projects";
import Title from "./sections/title/title";

function App() {
  return (
    <>
      <Title />
      <Projects />
      <CV />
      <Contact />
    </>
  );
}

export default App;
