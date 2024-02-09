import React from "react";

const Activity = ({ iClicked }) => {
  return (
    <span className='btn-activity'>
      <button>Activity</button>
      <button>
        <i className='fa-solid fa-xmark'></i>
      </button>
    </span>
  );
};

export default Activity;
