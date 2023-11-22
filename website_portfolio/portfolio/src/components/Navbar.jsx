import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

const Navbar = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie JSON file
    fetch('https://lottie.host/840209ea-da38-4c7f-9bc3-8424c854a725/KCHeu8r4M2.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error fetching Lottie JSON:', error));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='h-screen w-[10%] lg:w-[15%] bg-primary flex flex-col justify-between'>
      {animationData && (
        <Lottie options={defaultOptions} height={50} width={50} />
      )}
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
