import React from "react";
import "./toggle.css";

interface ToggleProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  styling?: React.CSSProperties;
  newID?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  handleChange,
  isChecked,
  styling,
  newID,
}) => {
  return (
    <div className="darkmode-toggle-container" id={newID} style={styling}>
      <input
        type="checkbox"
        className="sr-only"
        id="darkmode-toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="darkmode-toggle" className="toggle">
        <span>Toggle dark mode</span>
      </label>
    </div>
  );
};

export default Toggle;
