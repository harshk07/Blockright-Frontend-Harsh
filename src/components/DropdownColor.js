import React from "react";

export const DropdownColor = ({ color, onSelectColor }) => {
    return (
        <select
            className="border-none bg-white outline-none cursor-pointer"
            onChange={(e) => onSelectColor(e.target.value)}
        >
            <option value="">{color}</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
        </select>
    );
};
