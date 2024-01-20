import React, { useState, useEffect } from 'react';

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        // Extract the country names from the response
        const countryNames = data.map((country) => country.name.common);
        // Sort the country names alphabetically
        countryNames.sort();
        // Set the sorted list of countries in the state
        setCountries(countryNames);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSelectCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityInputChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <div>
        <select
          value={selectedCountry}
          onChange={handleSelectCountryChange}
          className='outline-none w-[115px] bg-white border border-grey rounded-md'
        >
          <option value=''>Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type='text'
          placeholder='City'
          value={selectedCity}
          onChange={handleCityInputChange}
          className='outline-none w-[115px] bg-white border border-black'
        />
      </div>
    </>
  );
};
