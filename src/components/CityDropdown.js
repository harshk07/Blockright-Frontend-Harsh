// components/CityDropdown.js
import React from "react";
import Select from "react-select";
import { getCitiesByCountry } from "../pages/dataUtils"; // Import the getCitiesByCountry function

const CityDropdown = ({ selectedCountry, onChange }) => {
  const cities = selectedCountry
    ? getCitiesByCountry(selectedCountry) // Use the getCitiesByCountry function to get cities based on the selected country
    : [];

  return (
    <Select
      options={cities}
      onChange={onChange}
      placeholder="Select a city"
      isDisabled={!selectedCountry}
    />
  );
};

export default CityDropdown;
