import React from "react";
import GroupName from "../components/form/GroupName";
import StartingPoints from "../components/form/StartingPoints";
import ActivitiesFilter from "../components/form/ActivitiesFilter";

const Form = () => {
  return (
    <main className='mt-28'>
      <form className='py-2 px-2 container mx-auto w-3/4'>
        <StartingPoints />
        <GroupName />
        <ActivitiesFilter />
        <button type='submit' className='btn bg-primary-500 text-white mt-10'>
          Find a Midpoint
        </button>
      </form>
    </main>
  );
};

export default Form;
