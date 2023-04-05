import React from "react";

function Entry(props) {

  function handleClick(){
    props.onDelete(props.id)
  }
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Entry;
