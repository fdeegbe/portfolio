import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ParticleBackground, Navbar, Title } from "./components";
import { Header, Footer } from  "./containers"

const App = () => {
  return (
    <div className='bg bg-auto bg-black'>
      <Header/>
      <ParticleBackground/>
      <Navbar/>

    <div className="min-h-screen flex-col ml-[15%]">  {/* w-screen lg:w-[70%] for head start on dynamic */}
          <div className="h-screen">
            <Title/>
            
          </div>
          <div className="">
          </div>  

      </div>
      
      <Footer/>
    </div>
  );
};

export default App

// npm install react-icons
