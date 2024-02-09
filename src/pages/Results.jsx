import React from "react";
import Map from "../components/results/Map";
import Itinerary from "../components/results/Itinerary";

const Results = () => {
  return (
    <main className='mt-28 py-2 px-2 container mx-auto w-3/4'>
      <Map />
      <Itinerary />
    </main>
  );
};

export default Results;
