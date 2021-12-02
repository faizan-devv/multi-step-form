import React from "react";

const SelectBox = ({ settrue, list, name }) => {
  return (
    <div>
      <label htmlFor="cars" style={{ marginRight: "20px" }}>
        Choose a {name}:
      </label>
      <select
        name={name}
        id={name}
        defaultValue={name}
        onChange={(e) => {
          settrue(name, e.target.value);
        }}
      >
        {list.map((x, index) => {
          return (
            <option key={index} value={x}>
              {x}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
