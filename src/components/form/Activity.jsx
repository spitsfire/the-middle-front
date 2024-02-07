import React from "react";

const Activity = ({ iClicked }) => {
  return (
    <span className='btn-activity-filtered'>
      <button>Activity</button>
      <button>
        <i className='fa-solid fa-xmark ml-1 border-left'></i>
      </button>
    </span>
  );
};

export default Activity;
