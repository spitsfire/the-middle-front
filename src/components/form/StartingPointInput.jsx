import React from "react";

const StartingPointInput = ({ traveler }) => {
  return (
    <div className='form-container'>
      <label for={`starting-point-${traveler}`} className='form-label'>
        Traveler {traveler} Starting Point
      </label>
      <input
        placeholder={"Start typing an address..."}
        type='text'
        name={`starting-point-${traveler}`}
        className='form-input'
      />
    </div>
  );
};

export default StartingPointInput;
