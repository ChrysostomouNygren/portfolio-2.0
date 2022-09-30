import React from "react";

function Skills(props) {
  return (
    <img
      src={props.url}
      alt={props.alt}
      title={props.title}
      className="skill"
    />
  );
}

export default Skills;
