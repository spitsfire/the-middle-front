import React from "react";

const StartingPointInput = ({ autoCompleteRef, traveler }) => {
  return (
    <div className='form-container'>
      <label htmlFor={`starting-point-${traveler}`} className='form-label'>
        Traveler {traveler} Starting Point
      </label>
      <input
        ref={autoCompleteRef}
        placeholder={"Start typing an address..."}
        type='text'
        name={`starting-point-${traveler}`}
        className='form-input'
      />
    </div>
  );
};

export default StartingPointInput;
