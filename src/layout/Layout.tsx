import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-200">
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow flex flex-col">
              <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;