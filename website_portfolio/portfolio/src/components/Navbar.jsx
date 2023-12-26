import React from 'react';

const ButtonTest = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='text-accent my-12 hover:bg-secondary hover:text-white transition-all duration-300 font-body'    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const handleButtonClick = () => {
    console.log('Test');
    // other actions go here
  };

  return (
    <div style={{ zIndex: 2 }} className='h-screen lg:w-[15%] flex flex-col justify-between fixed'>
      <ButtonTest onClick={handleButtonClick}>hi (top)</ButtonTest>
      <ButtonTest onClick={handleButtonClick}>hi (middle)</ButtonTest>
      <ButtonTest onClick={handleButtonClick}>hi (bottom)</ButtonTest>
    </div>
  );
};

export default Navbar;