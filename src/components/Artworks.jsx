import { useState } from "react";
import LazyImage from "./LazyImage";

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
                <LazyImage
                  src={item.primaryImageSmall}
                  alt={item.title || "Untitled"}
                  className="lazyImage"
                  style={{ width: "100%", height: "100%" }}
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
