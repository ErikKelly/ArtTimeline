import { useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline";
import Artworks from "./components/Artworks";
import History from "./components/History";
import Picker from "./components/Picker";
import painting from "./assets/paintings.json";
import sculpture from "./assets/sculpture.json";
import history from "./assets/history.json";

function App() {
  const artworkData = {
    Painting: painting,
    Sculpture: sculpture,
  };

  //picker
  const options = ["Painting", "Sculpture"];
  const [selectedType, setSelectedType] = useState("Painting");

  const handleValueChange = (newValue) => {
    setSelectedType(newValue);
  };

  const selectedData = artworkData[selectedType];

  // slider
  const [value, setValue] = useState(1600);

  const OnChangeEventTriggerd = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="appContainer">
        <h1>
          <div className="timelineTitle">Art Timeline 1600 - 1899</div>
        </h1>

        <div>
          Explore how art evolved decade by decade through artworks on display
          at The Metropolitian Museum of Art in New York City.
        </div>

        <div className="artNav">
          <div className="typeToggler">
            <Picker
              options={options}
              onChange={handleValueChange}
              startYear={value}
            />
          </div>

          <Timeline startYear={value} onChange={OnChangeEventTriggerd} />
        </div>
        <div className="content">
          <History startYear={value} historyData={history} />
          <Artworks startYear={value} artworkData={selectedData} />
        </div>
      </div>
    </>
  );
}

export default App;
