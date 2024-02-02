import React from "react";

const Jumbotron = () => {
  return (
    <div
      id='jumbotron'
      className='row-span-9 p-4 flex-grow flex justify-center items-center text-white'
    >
      <div className='flex flex-col gap-4'>
        <p>Find the best midpoint between friends.</p>
        <button className='btn bg-rose-500'>Get Started</button>
      </div>
    </div>
  );
};

export default Jumbotron;
