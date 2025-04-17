import { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const particleOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
        events: { onClick: { enable: true, mode: 'push' }, onHover: { enable: true, mode: 'repulse' } },
        modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
        color: { value: '#ffffff' },
        links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
        number: { density: { enable: true }, value: 50 },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
    background: {
        color: '#111827',
    }
};

const Layout = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [particlesInitialized, setParticlesInitialized] = useState(false);

  useEffect(() => {
      if (particlesInitialized) return;
      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setParticlesInitialized(true);
      }).catch(err => {
          console.error("Error initializing particles engine:", err);
          setParticlesInitialized(true);
      });
  }, [particlesInitialized]);

  const handleLoaderFinish = useCallback(() => {
      setShowLoader(false);
  }, []);

  const particlesLoaded = useCallback(async () => {
       console.log('Particles container loaded');
  }, []);

  if (showLoader || !particlesInitialized) {
      return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900">
      {particlesInitialized && (
         <Particles
            id="tsparticles-layout"
            options={particleOptions}
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 z-0 pointer-events-none"
         />
      )}
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
              <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;