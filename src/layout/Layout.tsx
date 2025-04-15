import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
<<<<<<< Updated upstream
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
        <Outlet />
        </div>
      </main>
      <Footer />
=======
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
>>>>>>> Stashed changes
    </div>
  );
};

export default Layout;