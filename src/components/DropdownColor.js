import React from "react";

const customStyles = {
  borderRadius: "0.25rem",
  border: "1px solid #CBD5E0",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  padding: "0.3rem 0.5rem",
  backgroundColor: "white",
  color: "#1A202C",
  cursor: "pointer",
};

const customOptionStyles = {
  backgroundColor: "white",
  color: "#1A202C",
  cursor: "pointer",
};

export const DropdownColor = ({ color, onSelectColor }) => {
  return (
    <select
      style={customStyles}
      className="border-none bg-white outline-none cursor-pointer"
      onChange={(e) => onSelectColor(e.target.value)}
    >
      <option style={customOptionStyles} value="">
        {color}
      </option>
      <option style={customOptionStyles} value="White">
        White
      </option>
      <option style={customOptionStyles} value="Black">
        Black
      </option>
      <option style={customOptionStyles} value="Red">
        Red
      </option>
      <option style={customOptionStyles} value="Green">
        Green
      </option>
      <option style={customOptionStyles} value="Yellow">
        Yellow
      </option>
    </select>
  );
};
