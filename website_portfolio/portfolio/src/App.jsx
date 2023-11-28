import { useCallback } from "react";
// import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import ParticlesContainer from "./components/ParticlesContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ zIndex: 1 }}>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default App