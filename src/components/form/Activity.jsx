import React from "react";

const Activity = ({ activity }) => {
  return (
    <span className='btn-activity'>
      <button>{activity}</button>
      <button>
        <i className='fa-solid fa-plus'></i>
      </button>
    </span>
  );
};

export default Activity;
