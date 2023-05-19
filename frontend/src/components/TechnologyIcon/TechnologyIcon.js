import {
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTerraform,
} from "react-icons/si";

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
    <a href={link} target="_blank" rel="noreferrer">
      {ICON_MAP[name]}
    </a>
  );
};

export default TechnologyIcon;
