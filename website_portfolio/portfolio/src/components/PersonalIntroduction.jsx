import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const PersonalIntroduction = () => {
    return (
        <div className='m-10 text-white font-body text-md md:text-xl flex flex-col md:flex-row items-center justify-center'>
            <div className="w-full h-min-500px text-white text-balance   bg-altbackground rounded-2xl p-5 m-5 md:p-10 md:m-10 z-1">
                <span> I'm a current undergraduate student at The University of Maryland,
                    College Park, majoring in<span className='text-accent'> Computer Science</span> with an associate's
                    degree in <span className='text-accent'>General STEM</span>. I have a strong interest in
                    <TypeAnimation className='textmd md:text-xl text-accent bold' sequence={[
                        " Software Engineering",
                        1000,
                        " Compiler Design",
                        1000,
                        " Algorithm Design",,
                        1000,
                        " Cybersecurity",
                        1000,
                    ]}
                        speed={20}
                        repeat={Infinity}
                        style={{ }}
                    />
                </span>
                    </div>
                <div className="justify-center z-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-white">
                    <img
                        className="z-1 w-full h-full object-cover"
                        src='src/components/images/Headshot 1.JPG'
                        alt='portrait' />
            </div>
        </div>
    );
};

export default PersonalIntroduction;
