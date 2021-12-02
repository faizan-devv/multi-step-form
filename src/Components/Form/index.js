import React from "react";
import Data from "../../Data.json";
import { useState } from "react";
import SelectBox from "../SelectBox";

const Form = () => {
  const continents = Object.keys(Data.continents);
  const [data, setData] = useState({
    continent: "",
    country: "",
    state: "",
    city: "",
    area: "",
    house: "",
  });
  const [steps, setSteps] = useState({
    continent: false,
    country: false,
    state: false,
    city: false,
    area: false,
    house: false,
  });
  let countries = [];
  let states = [];
  let cities = [];
  let areas = [];
  if (data.continent.length > 1) {
    countries = Object.keys(Data.continents[data.continent].countries);
  }
  if (data.country.length > 1) {
    states = Object.keys(
      Data.continents[data.continent].countries[data.country].states
    );
  }
  if (data.state.length > 1) {
    cities = Object.keys(
      Data.continents[data.continent].countries[data.country].states[data.state]
        .cities
    );
  }
  if (data.city.length > 1) {
    areas =
      Data.continents[data.continent].countries[data.country].states[data.state]
        .cities[data.city].Areas;
  }

  const handleNext = (name, value) => {
    if (name === "continent") {
      setSteps({
        ...steps,
        continent: true,
        country: false,
        state: false,
        city: false,
        area: false,
      });
      setData({
        ...data,
        continent: value,
        country: "",
        state: "",
        city: "",
        area: "",
      });
    }
    if (name === "country") {
      setSteps({
        ...steps,
        country: true,
        state: false,
        city: false,
        area: false,
      });
      setData({
        ...data,
        country: value,
        state: "",
        city: "",
        area: "",
      });
    }
    if (name === "state") {
      setSteps({
        ...steps,
        state: true,
        city: false,
        area: false,
      });
      setData({
        ...data,
        state: value,
        city: "",
        area: "",
      });
    }
    if (name === "city") {
      setSteps({
        ...steps,
        city: true,
        area: false,
      });
      setData({
        ...data,
        city: value,
        area: "",
      });
    }
    if (name === "area") {
      setSteps({
        ...steps,
        area: true,
      });
      setData({
        ...data,
        area: value,
      });
    }
    if (name === "house") {
      setSteps({
        ...steps,
        house: true,
      });
      setData({
        ...data,
        house: value,
      });
    }
  };

  return (
    <div>
      <h1> Multi Step Form</h1>
      <div className="MultiStepForm">
        <SelectBox settrue={handleNext} list={continents} name="continent" />
        {steps.continent ? (
          <SelectBox settrue={handleNext} list={countries} name="country" />
        ) : null}
        {steps.continent && steps.country ? (
          <SelectBox settrue={handleNext} list={states} name="state" />
        ) : null}
        {steps.continent && steps.country && steps.state ? (
          <SelectBox settrue={handleNext} list={cities} name="city" />
        ) : null}
        {steps.continent && steps.country && steps.state && steps.city ? (
          <SelectBox settrue={handleNext} list={areas} name="area" />
        ) : null}
      </div>
    </div>
  );
};

export default Form;
