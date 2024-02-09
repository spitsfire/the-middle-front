import React from "react";

const GroupName = () => {
  return (
    <div id='group-name'>
      <div className='form-control'>
        <label htmlFor='group-name' className='form-label'>
          Group Name <i>(optional)</i>
        </label>
        <input type='text' name='group-name' className='form-input' />
      </div>
    </div>
  );
};

export default GroupName;
