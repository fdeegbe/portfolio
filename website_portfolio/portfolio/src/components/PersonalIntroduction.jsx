// import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import headshot from '../assets/Headshot 1.JPG';
const PersonalIntroduction = () => {
    return (
        <div className='m-10 p-10 mr:10 md:mx-30 text-white font-body text-md md:text-2xl flex flex-col md:flex-row items-center justify-center'>
            <div className="md:hidden block justify-center z-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-white">
                <img
                    className="z-1 w-full h-full object-cover"
                    src={headshot} />
            </div>
            <div className="w-full h-min-500px text-white text-balance bg-altbackground rounded-2xl p-5 m-5 md:p-10 md:m-10 z-1">
                <div>

                    <span> I&apos;m an alumnus @<span className='text-accent'> The University of Maryland,
                        College Park,</span> majoring in<span className='text-accent'> Computer Science</span> with an associate&apos;s
                        degree in <span className='text-accent'>General STEM. </span></span>
                    <div>
                        <br />
                        I 💚
                        <TypeAnimation className='textmd md:text-2xl text-accent bold' sequence={[
                            " Software Engineering",
                            1000,
                            " Compiler Design",
                            1000,
                            " Algorithm Design",
                            1000,
                            " Cybersecurity",
                            1000,
                        ]}
                            speed={20}
                            repeat={Infinity}
                            style={{}}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:block justify-center z-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-white">
                <img
                    className="z-1 w-full h-full object-cover"
                    src={headshot} />
            </div>
        </div>
    );
};

export default PersonalIntroduction;
