import React from "react";

const Header = () => {
  return (
    <header className='row-span-2 p-4 bg-sky-700 flex flex-row justify-between items-center text-white'>
      <div id='logo-container' className='basis-1/4'>
        <h1 className='text-3xl'>The Middle</h1>
      </div>
      <nav className='basis-1/4'>
        <ul className='flex flex-row gap-x-12 justify-end'>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
