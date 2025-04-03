/**
 * Create a dropdown with countries, on choosing a country, display another dropdown with cities
 *
 */

import { useState } from 'react';

const Dropdown = () => {
  const countries = [
    { name: 'India', value: 'IN', cities: ['Madurai', 'Chennai'] },
    { name: 'USA', value: 'US', cities: ['California', 'Denver'] },
    { name: 'Canada', value: 'CN', cities: ['Calgary', 'Alberta'] },
  ];

  const [selCountry, setSelCountry] = useState('');
  const [selCity, setSelCity] = useState('');

  const selectedObj = countries.find((country) => country.name === selCountry);
  console.log('sel country', selCountry);
  console.log(selectedObj, 'selected');

  return (
    <div className="home">
      {/* 1st */}
      <select
        name="country"
        id="country"
        value={selCountry}
        onChange={(e) => setSelCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries?.map((country) => (
          <option key={country.value}>{country.name}</option>
        ))}
      </select>

      {/* 2nd */}
      {selCountry && (
        <select
          name="city"
          value={selCity}
          onChange={(e) => setSelCity(e.target.value)}
        >
          <option value="">Select City</option>
          {selectedObj?.cities.map((city) => (
            <option key={city}> {city} </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
