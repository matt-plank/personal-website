import "./cv.css";

const CV = () => {
  return (
    <div className="section cv">
      <div className="left">
        <h2>My CV</h2>
        <p>Download my CV if you're interested in my skill set.</p>
      </div>
      <div className="right">
        <a href="http://localhost:8000/api/files/resume">
          <img src="http://localhost:8000/api/files/resume_image" alt="CV" />
        </a>
      </div>
    </div>
  );
};

export default CV;
