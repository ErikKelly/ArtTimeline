import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const marks = {
  1300: "1300",
  1400: "1400",
  1500: "1500",
  1600: "1600",
  1700: "1700",
  1800: "1800",
  1890: "1890",
};

export default function Timeline({ startYear, onChange }) {
  return (
    <div className="slider">
      <Slider
        min={1300}
        max={1890}
        step={10}
        marks={marks}
        value={startYear}
        onChange={onChange}
        trackStyle={{ backgroundColor: "#700101", height: 10 }}
        railStyle={{ backgroundColor: "#700101", height: 10 }}
        handleStyle={{
          borderColor: "blue",
          transform: "translateX(-50%)",
          height: 20,
          width: 20,
          marginTop: -5,
          backgroundColor: "red",
        }}
      />
    </div>
  );
}
