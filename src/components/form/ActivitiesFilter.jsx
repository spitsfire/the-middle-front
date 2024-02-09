import React from "react";
import Activity from "./Activity";

const ActivitiesFilter = () => {
  const activities = [
    "hiking",
    "restaurant",
    "fast food",
    "parks",
    "scenic",
    "bar",
  ];

  const displayActivityPills = activities.map((act, i) => {
    return <Activity activity={act} key={i} />;
  });
  return (
    <div id='activities' className='mt-12'>
      <h1 className='text-xl mb-3'>Activities for Midpoint</h1>
      <label for='activities' className='form-label'>
        Click on any activities that interest you:
      </label>
      <div className='flex justify-around'>{displayActivityPills}</div>
    </div>
  );
};

export default ActivitiesFilter;
