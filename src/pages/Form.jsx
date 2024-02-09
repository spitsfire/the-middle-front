import React, { useEffect, useRef } from "react";
import GroupName from "../components/form/GroupName";
import StartingPoints from "../components/form/StartingPoints";
import ActivitiesFilter from "../components/form/ActivitiesFilter";
import { Loader } from "@googlemaps/js-api-loader";
import env from "./../../env.json";

const Form = () => {
  console.log(env.REACT_APP_GOOGLE_API_KEY);
  const autoCompleteRef = useRef("");
  let autoComplete;

  const loader = new Loader({
    apiKey: env["REACT_APP_GOOGLE_API_KEY"],
    version: "weekly",
  });

  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "formatted_address"],
    strictBounds: false,
  };
  useEffect(() => {
    loader.load().then(async () => {
      const { Autocomplete } = await google.maps.importLibrary("places");

      autoComplete = new Autocomplete(autoCompleteRef.current, options);
    });
  }, []);

  return (
    <main className='mt-28'>
      <form className='py-2 px-2 container mx-auto w-3/4'>
        <StartingPoints autoCompleteRef={autoCompleteRef} />
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
