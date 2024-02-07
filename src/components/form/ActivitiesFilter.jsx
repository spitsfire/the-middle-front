import React from "react";
import Activity from "./Activity";

const ActivitiesFilter = () => {
  return (
    <div id='activities' className='mt-12'>
      <h1 className='text-xl mb-3'>Activities for Midpoint</h1>
      <label for='activities' className='form-label'>
        Click on any activities that interest you:
      </label>
      <Activity />
    </div>
  );
};

export default ActivitiesFilter;
