import React, { useState } from "react";

function Picker({ options, onChange }) {
  const [value, setValue] = useState(options[0]);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Picker;
