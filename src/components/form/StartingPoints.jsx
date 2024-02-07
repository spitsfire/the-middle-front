import React from "react";
import StartingPointInput from "./StartingPointInput";

const StartingPoints = () => {
  return (
    <div id='starting-points'>
      <StartingPointInput key={1} traveler={1} />
      <StartingPointInput key={2} traveler={2} />
    </div>
  );
};

export default StartingPoints;
