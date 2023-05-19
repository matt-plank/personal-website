import {
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTerraform,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const ICON_MAP = {
  Django: <SiDjango />,
  Node: <SiNodedotjs />,
  Python: <SiPython />,
  React: <SiReact />,
  Terraform: <SiTerraform />,
  TensorFlow: <SiTensorflow />,
};

const TechnologyIcon = ({ name, link }) => {
  return (
    <>
      <a
        data-tooltip-id={name}
        data-tooltip-content={name}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {ICON_MAP[name]}
      </a>
      <Tooltip id={name} />
    </>
  );
};

export default TechnologyIcon;
