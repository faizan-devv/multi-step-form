import "./App.css";
import { useState } from "react";
import Continent from "./Components/Continents";
import Country from "./Components/Countries";
import States from "./Components/States";
import Cities from "./Components/Cities";
import Houses from "./Components/House";
import Areas from "./Components/Areas";

function App() {
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
  const handleNext = (name, value) => {
    if (name === "continent") {
      console.log("In Continent");
      setSteps({
        ...steps,
        continent: true,
      });
      setData({
        ...data,
        continent: value,
      });
    }
    if (name === "country") {
      setSteps({
        ...steps,
        country: true,
      });
      setData({
        ...data,
        country: value,
      });
    }
    if (name === "state") {
      setSteps({
        ...steps,
        state: true,
      });
      setData({
        ...data,
        state: value,
      });
    }
    if (name === "city") {
      setSteps({
        ...steps,
        city: true,
      });
      setData({
        ...data,
        city: value,
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
    <div className="App">
      <div className="MultiStepForm">
        <Continent settrue={handleNext} />
        {steps.continent ? <Country settrue={handleNext} /> : null}
        {steps.continent && steps.country ? (
          <States settrue={handleNext} />
        ) : null}
        {steps.continent && steps.country && steps.state ? (
          <Cities settrue={handleNext} />
        ) : null}
        {steps.continent && steps.country && steps.state && steps.city ? (
          <Areas settrue={handleNext} />
        ) : null}
        {steps.continent &&
        steps.country &&
        steps.state &&
        steps.city &&
        steps.area ? (
          <Houses settrue={handleNext} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
