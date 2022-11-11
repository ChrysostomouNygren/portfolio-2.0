import React from "react";

function Project(props) {
  return (
    <div>
      <h4>
        <a href={props.url} target="_blank">{props.name}</a>
        {props.extra}
      </h4>
      <p>
        {props.description}
        <a href={props.extraUrl} target="_blank">{props.link}</a>
      </p>
    </div>
  );
}

export default Project;
