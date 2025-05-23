import { useState } from "react";
import data from "../assets/sculpture.json";

export default function Artworks({ startYear, artworkData }) {
  const sortedByName = [...artworkData].sort((a, b) =>
    (a.artistDisplayName || "").localeCompare(b.artistDisplayName || "")
  );

  const [flipped, setFlipped] = useState({});

  const handleCardFlip = (objectID) => {
    setFlipped((prevState) => {
      const isCurrentlyFlipped = prevState[objectID];

      if (isCurrentlyFlipped) {
        const newState = { ...prevState };
        delete newState[objectID];
        return newState;
      } else {
        return {
          ...prevState,
          [objectID]: true,
        };
      }
    });
  };

  return (
    <>
      <div className="cards">
        {sortedByName
          .filter(
            (item) =>
              item.objectEndDate >= startYear &&
              item.objectEndDate <= startYear + 9
          )
          .map((item) => (
            <button
              className="card"
              key={item.objectID}
              type="button"
              onClick={() => handleCardFlip(item.objectID)}
            >
              <div
                className={`cardImage ${
                  flipped[item.objectID] ? "flipped" : ""
                }`}
              >
                <img
                  src={item.primaryImageSmall}
                  alt={item.title || "Untitled"}
                  loading="lazy"
                />
              </div>

              {flipped[item.objectID] ? (
                <div className="cardInfo">
                  <div>{item.title || "Untitled"}</div>
                  <div>{item.objectDate || item.objectEndDate}</div>
                  <div>{item.artistDisplayName || "Annonymous"}</div>
                  <div>{item.culture || item.department}</div>
                </div>
              ) : (
                <div></div>
              )}
            </button>
          ))}
      </div>
    </>
  );
}
