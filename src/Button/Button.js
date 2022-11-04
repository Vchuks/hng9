import React from "react";
import "./button.css";

const Button = ({ href, children, className = "btn", id }) => {
  return (
    <div className="btn-container">
      <a href={href} className={className} id={id} >
        {children}
      </a>
    </div>
  );
};

export default Button;
