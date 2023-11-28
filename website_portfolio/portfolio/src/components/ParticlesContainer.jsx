import React, { useState, useEffect } from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";


const ParticlesContainer = () => {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    const initParticles = async () => {
      if (engine) {
        await loadStarsPreset(engine);
      }
    };

    initParticles();
  }, [engine]);

  const particlesInit = (particles) => {
    setEngine(particles);
  };

  const options = {
    preset: "stars",
  };

  return <Particles options={options} init={particlesInit} />;
};

export default ParticlesContainer;