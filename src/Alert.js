import React from "react";

const Alert = (props) => {
  return (
    <div class="alert alert-secondary" role="alert">
      This is a primiry alert with
      <a href="#" class="alert-link">
        {props.name}
      </a>
      . Give it a click if you like.
    </div>
  );
};
export default Alert;
