import React from "react";

export const Dropdown = ({ size, onSelectSize }) => {
  return (
    <select
      className="border-none bg-white outline-none cursor-pointer"
      onChange={(e) => onSelectSize(e.target.value)}
    >
      <option value="">{size}</option>
      <option value="X">X</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
      <option value="XXXL">XXXL</option>
    </select>
  );
};
