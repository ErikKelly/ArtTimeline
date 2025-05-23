import React, { useState } from "react";

function Picker({ options, onChange, startYear }) {
  const [value, setValue] = useState(options[0]);

  const handleChange = (option) => {
    console.log(event);
    setValue(option);
    onChange(option);
  };

  return (
    <>
      <button
        className={`toggleType ${value === "Painting" ? "selected" : ""}`}
        key="Painting"
        type="button"
        onClick={() => handleChange("Painting")}
      >
        Paintings
      </button>
      <span className="dateRange">
        {startYear} - {startYear + 9}
      </span>
      <button
        className={`toggleType ${value === "Sculpture" ? "selected" : ""}`}
        key="Sculpture"
        type="button"
        onClick={() => handleChange("Sculpture")}
      >
        Sculpture
      </button>
    </>
  );
  /*
  return options.map((option) => (
    <button
      className={`toggleType ${option === value ? "selected" : ""}`}
      key={option}
      onClick={() => handleChange(option)}
    >
      <div>{option}</div>
    </button>
  ));
  */
}

export default Picker;
