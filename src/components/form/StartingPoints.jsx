import React from "react";
import StartingPointInput from "./StartingPointInput";

const StartingPoints = ({ autoCompleteRef }) => {
  return (
    <div id='starting-points'>
      <StartingPointInput
        autoCompleteRef={autoCompleteRef}
        key={1}
        traveler={1}
      />
    </div>
  );
};

export default StartingPoints;
