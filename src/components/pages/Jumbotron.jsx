import React from "react";
import { useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <div
      id='jumbotron'
      className='row-span-9 p-4 flex-grow flex justify-center items-center text-white'
    >
      <div className='flex flex-col gap-4'>
        <p>Find the best midpoint between friends.</p>
        <button
          className='btn bg-primary-500'
          onClick={() => navigate("midpoint")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
