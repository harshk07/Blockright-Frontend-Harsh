// components/CountryDropdown.js
import React from "react";
import Select from "react-select";
import { getAllCountries } from "../pages/dataUtils"; // Import the getAllCountries function

const CountryDropdown = ({ onChange }) => {
  const countries = getAllCountries(); // Use the getAllCountries function to get all countries

  return (
    <Select
      options={countries}
      onChange={onChange}
      placeholder="Select a country"
    />
  );
};

export default CountryDropdown;
