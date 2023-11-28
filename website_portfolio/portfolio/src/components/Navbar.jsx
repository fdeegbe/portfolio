import React, { useEffect, useState } from 'react';


const Navbar = () => {

  return (
    <div style={{ zIndex: 2 }} className='h-screen w-[10%] lg:w-[15%] bg-primary flex flex-col justify-between'>

      <div className='text-accent my-2'>
        hi (top)
      </div>
      <div className='text-accent my-auto'>
        hi (middle)
      </div>
      <div className='text-accent my-2'>
        hi (bottom)
      </div>
    </div>
  );
};

export default Navbar;
