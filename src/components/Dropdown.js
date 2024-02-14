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

export const Dropdown = ({ size, onSelectSize }) => {
  return (
    <select
      style={customStyles}
      className="outline-none"
      onChange={(e) => onSelectSize(e.target.value)}
    >
      <option style={customOptionStyles} value="">
        {size}
      </option>
      <option style={customOptionStyles} value="X">
        X
      </option>
      <option style={customOptionStyles} value="XL">
        XL
      </option>
      <option style={customOptionStyles} value="XXL">
        XXL
      </option>
      <option style={customOptionStyles} value="XXXL">
        XXXL
      </option>
    </select>
  );
};
