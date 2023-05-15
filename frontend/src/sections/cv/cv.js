import { API_ROOT } from "../../config/config";
import "./cv.css";

const CV = () => {
  return (
    <div className="section cv">
      <div className="left">
        <h2>My CV</h2>
        <p>Download my CV if you're interested in my skill set.</p>
      </div>
      <div className="right">
        <a href={`${API_ROOT}/api/files/resume.pdf`}>
          <img src={`${API_ROOT}/api/files/resume.png`} alt="CV" />
        </a>
      </div>
    </div>
  );
};

export default CV;
