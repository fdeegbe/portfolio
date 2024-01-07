import { ParticleBackground, Navbar, Title, Skills, WorkExperience, PersonalIntroduction } from "./components";
import { Element } from 'react-scroll';
const App = () => {
  return (
    <div className='bg bg-auto bg-background'>
      <ParticleBackground />
      <div className="">
        <Navbar />

        <div className="flex flex-col p-px grow">  {/* w-screen lg:w-[70%] for head start on dynamic */}
          <Element name="title" />
          <Title />
          <PersonalIntroduction />
          <Element name="experience" />
          <div className="h-80" />
          <WorkExperience />
          <Element name="skills" />
          <div className="h-80" />
          <Skills />
          <div className="h-80" />
          <div className="text-white font-body text-3xl break-words md:text-4xl text-center" >More Coming Soon!</div>
        </div>
        <div className="h-80" />
      </div>
    </div>
  );
};

export default App

// npm install react-icons
// add animations to title icons
// add cooler word font color and stuff
// make picture better
// fix navbar and add icons to make it cool ig
// media query stuff to make stuff smaller on mobile
// too small
// mobject fit/ posisition for the pfp?
