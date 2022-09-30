import React from "react";

function Project(props) {
  return (
    <div>
      <h4>
        <a href={props.url}>{props.name}</a>
        {props.extra}
      </h4>
      <p>
        {props.description}
        <a href={props.extraUrl}>{props.link}</a>
      </p>
    </div>
  );
}

export default Project;
