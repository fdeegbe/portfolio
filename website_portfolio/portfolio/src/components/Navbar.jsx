import React from 'react';

const Navbar = () => {

  return (
    <div className='h-7rem w-screen bottom-0 flex text-white fixed z-100 bg bg-altbackground md:font-body md:h-screen md:px-5 md:text-xl md:bg md:bg-background md:w-20 md:hover:w-80 md:m-0 md:transition-all md:duration-300 md:hover:bg-altbackground md:bottom-auto'>
      <ul className='flex md:flex-col w-full justify-between items-center md:h-full md:m-0 md:w-80 md:justify-start md:items-start'>
        <li className='md:my-5 md:w-80'>
          <a href='#' className='w-full h-full group flex items-center md:hover:text-opacity-100 md:transition-opacity md:duration-300'>
            <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
            <span className='md:flex text-xl md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:w-20 hidden ml-5'>Home</span>
          </a>
        </li>
        <li className='md:my-5 md:w-80'>
          <a href='#experience' className='w-full h-full group flex items-center md:hover:text-opacity-100 md:transition-opacity md:duration-300'>
            <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
            <span className='md:block md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:w-20 hidden ml-5'>Experience</span>

          </a>
        </li>
        {/* <li className='md:my-5 md:w-80'>
              <a href='#' className='w-full h-full group flex items-center md:hover:text-opacity-100 md:transition-opacity md:duration-300'>
              <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
              </a>
            </li> */}
          <li className='md:my-5 md:w-80'>
            <a href='#skills' className='w-full h-full group flex items-center md:hover:text-opacity-100 md:transition-opacity md:duration-300'>
              <svg className="w-20 h-20 m-2 md:mt-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
              <span className='md:flex md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:w-20 hidden ml-5'>Skills</span>              </a>
          </li>
        <li className='hidden mt-auto md:block'>
          <a href='#' className='group flex items-center'>
            <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
            <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Top</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

//   return (
//       <div className='text-white font-body w-20 text-xl h-screen px-5 w-20 hover:w-80 flex flex-col fixed m-0 transition-all duration-300 bg bg-auto hover:bg-altbackground'>
//         <ul className='h-full fixed flex flex-col m-0 w-80'>
//           <li className='my-5'>
//           <a href='#' className='group flex items-center hover:text-opacity-100 transition-opacity duration-300'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Home</span>
//             </a>
//           </li>
//           <li className='my-5'>
//             <a href='#experience' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Experience</span>
//             </a>
//           </li>
//           {/* <li className='my-5'>
//             <a href='#' className='group w flex items-center'>
//             <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Values</span>
//             </a>
//           </li> */}
//           <li className='my-5'>
//             <a href='#skills' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Skills</span>
//             </a>
//           </li>
//           <li className='mt-auto'>
//             <a href='#' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Top</span>
//             </a>
//           </li>
//         </ul>
//       </div>
// );
// };

export default Navbar;

// https://youtu.be/biOMz4puGt8?t=404 so like um the navbar is too far down, the flexbox isnt flexing (maybe cuz of unordered list u can try and go back to check and uhh)
// ideally, we want each icon to have a max width, and shrink if we zoom in.

// return (
//   <div className='group text-white font-body bg-altbackground relative'>
//     <div className='h-screen px-5 w-20 group-hover:w-80 flex flex-col m-0 transition-all duration-100 bg bg-auto hover:bg-altbackground'>
//       <ul className='h-full flex flex-col m-0 w-50'>
//         <li className='my-5'>
//           <a href='#' className='flex items-center'>
//             <svg className="w-20 h-20 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
//             <span className='invisible group-hover:visible group-hover:block h-full ml-5'>Home</span>
//           </a>
//         </li>
//         <li className='my-5'>
//           <a href='#' className='flex items-center'>
//             <svg className="w-20 h-20 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
//             <span className='invisible group-hover:visible group-hover:block h-full ml-5'>Work Experience</span>
//           </a>
//         </li>
//         <li className='my-5'>
//           <a href='#' className='flex items-center'>
//           <svg className="max-w-20 h-20 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
//             <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Values</span>
//           </a>
//         </li>
//         <li className='my-5'>
//           <a href='#' className='flex items-center'>
//             <svg className="w-20 h-20 m-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
//             <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Personal Projects</span>
//           </a>
//         </li>
//         <li className='mt-auto'>
//           <a href='#' className='flex items-center'>
//             <svg className="w-20 h-20 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
//             <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Other</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="absolute top-0 left-0 p-4 visible group-hover:invisible">
//       <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h16m-7 6h7"></path>
//       </svg>
//     </div>
//   </div>
// );
// };



// const Navbar = () => {

//   return (
//     <div className='text-white font-body w-20 text-xl'>
//       <div className='h-screen px-5 w-20 hover:w-80 flex flex-col fixed m-0 transition-all duration-300 bg bg-auto hover:bg-altbackground'>
//         <ul className='h-full fixed flex flex-col m-0 w-80'>
//           <li className='my-5'>
//           <a href='#' className='group flex items-center hover:text-opacity-100 transition-opacity duration-300'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Home</span>
//             </a>
//           </li>
//           <li className='my-5'>
//             <a href='#experience' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Experience</span>
//             </a>
//           </li>
//           {/* <li className='my-5'>
//             <a href='#' className='group w flex items-center'>
//             <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Values</span>
//             </a>
//           </li> */}
//           <li className='my-5'>
//             <a href='#skills' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Skills</span>
//             </a>
//           </li>
//           <li className='mt-auto'>
//             <a href='#' className='group flex items-center'>
//               <svg className="w-20 h-20 m-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300 transition transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
//               <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full ml-5'>Top</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
// );
// };