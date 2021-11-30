import React from "react";

const Continent = ({ settrue }) => {
  return (
    <div>
      <label for="cars" style={{ marginRight: "20px" }}>
        Choose a Continent:
      </label>
      <select
        name="Continents"
        id="Continents"
        onChange={(e) => {
          console.log(e.target.value);
          settrue("continent", e.target.value);
        }}
      >
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  );
};

export default Continent;
