import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import React from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Tilt from 'react-parallax-tilt';
import { FaGithub } from "react-icons/fa";

import boeingLogo from "../assets/NEW_BI&A_Logo.png";
import cnhLogo from "../assets/Children's_Hospital_Logo.png";
import acesLogo from "../assets/aces shield.png";

const { useRef } = React;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
    {
        title: "Honeypot Attacker Behavior Research",
        image: acesLogo,
        link: "https://docs.google.com/document/d/1yAadRHMZwNuWL2eN-xVQRiOuTfVR52NxkLpQtlUcRQ4/edit?usp=sharing",
        githubLink: "https://github.com/fdeegbe/1G-Ray-of-Light",
        color: "rgb(255, 255, 255, 0.2)",
        invert: false,
    },
    {
        title: "Boeing NLP Intern Project",
        image: boeingLogo,
        link: "https://www.bia-boeing.com/news-articles/summer-internship-program-2023",
        githubLink: null,
        color: "rgb(187, 247, 208, 0.2)",
    },
    {
        title: "Chilren's National Hospital 'Kapture'",
        image: cnhLogo,
        link: "https://appdevclub.com/#/project/664d1f081b9bfb9fa431e175",
        githubLink: null,
        color: "rgb(94, 81, 77, 0.2)",
        invert: true,
    },
    // Add more projects here...
];


const ProjectCard = ({ title, image, link, githubLink, color = "#18181b", invert = true }) => (
    <li
        className="rounded-2xl shadow-lg overflow-hidden mx-[10vw] mt-10 list-none"
        style={{ backgroundColor: color }}
    >
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-105"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-[200px] md:h-[500px] object-cover"
                style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
            />
        </a>
        <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
            onClick={() => {
                if (githubLink) window.open(githubLink, "_blank");
            }}
        >
            <h3 className="text-lg font-bold text-white text-center flex-1">{title}</h3>
            {githubLink && (
                <FaGithub className="ml-3 text-white text-2xl hover:text-gray-300 transition-colors" />
            )}
        </div>
    </li>
);


const BoeingExperience = () => (

    <div className="w-screen h-screen flex items-center justify-center">
        <div className="z-[1] w-[75vw] h-[75vh] text-white bg-altbackground rounded-2xl p-5 md:p-10 z-1 flex flex-col items-center justify-center">
            <div className="flex flex-col md:items-center">
                <a className="transition transform hover:scale-105 opacity-50 hover:opacity-100 hidden md:block"
                    href="https://www.bia-boeing.com/news-articles/summer-internship-program-2023"
                    target='_blank' rel='noopener noreferrer'>
                    <img
                        style={{
                            filter: 'brightness(0) invert(1)',
                            width: '40rem',
                            '@media (minWidth: 768px)': { width: '300px' },
                            '@media (minWidth: 1024px)': { width: '400px' },
                        }}
                        src={boeingLogo}
                        alt="Boeing Intelligence & Analytics | Strategic Solutions"
                    />
                </a>
            </div>
            <div className="md:ml-10">
                <p className="md:hidden text-lg md:text-2xl">Software Engineer Intern </p>
                <p className="md:hidden text-lg md:text-2xl">June 2023 - August 2023</p>
                <p className="hidden md:block md:text-2xl">Software Engineer Intern </p>
                <p className="hidden md:block md:text-2xl">June 2023 - August 2023</p>
                <ul className="list-disc list-inside w-full mt-4 text-lg md:text-xl">
                    <li>Used NLP libraries to develop a document tagging app, improving internal database querying by suggesting keywords</li>
                    <li>Engaged in the design and testing phases of the keyword suggestion function for efficient processing</li>
                    <li>Worked on back-end development using SQLAlchemy to build data metrics for the application</li>
                </ul>
            </div>
            {/* ...SVGs and other content here... */}
        </div>
    </div>
);

const WorkExperience = () => {

    const name = useRef();
    const container = useRef();
    useGSAP((context, contextSafe) => {
        const containerEl = name.current;
        if (!containerEl) return;

        const children = Array.from(containerEl.children);

        let totalWidth = 0;
        children.forEach((child) => {
            const width = child.offsetWidth;
            totalWidth += width;
            // console.log(`Child ${idx} width:`, width);
        });
        // console.log("Total width of all children:", totalWidth);

        const numItems = containerEl ? containerEl.children.length : 0;
        // console.log("Number of Experience items:", numItems);

        gsap.to(name.current, {
            // xPercent: -100,
            xPercent: -(100 / numItems) * (numItems - 1),  // Move content to the left 100% of its width
            duration: 1,
            // ease: 'power1.out',
            ease: "none", // <-- IMPORTANT!
            // scrub: 1,
            scrollTrigger: {
                trigger: name.current,
                pin: true,
                start: "center center", // when the [0] object hits the [1] viewport
                // markers: true,
                scrub: 0.1,
                // snap: (1 / numItems-1),
                end: (totalWidth * 0.25) + " top"
            },
        });
        console.log("context", context.data.length)

    }, { scope: container, dependencies: [], revertOnUpdate: false })
    return (
        <div id='experience' className="z-[1] h-auto">
            <div className='text-center text-white font-body hidden md:block break-words md:text-4xl'>
                Project Highlights
            </div>
            <div className='text-center text-white text-3xl font-body md:hidden break-words'>
                Fun Projects!
            </div>
            <div ref={name} className="flex flex-nowrap grow w-max">

                {projects.map((item, idx) => (
                    <ProjectCard key={idx} {...item} />
                ))}
                {/* <BoeingExperience />
                <BoeingExperience /> */}
            </div>
        </div>
    );
};
// plan: make cool paralax cardds for projects which is the new side scrroller.. then make a timeline for work experience
export default WorkExperience;