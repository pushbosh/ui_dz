
import React from "react";
import "./index.css";

const Tooltip = ({ position, text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip-box tooltip-${position}`}>{text}</div>
    </div>
  );
};

export default Tooltip;
