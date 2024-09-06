import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Import social media icons

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <header className="min-h-screen container">
        <Header />
        <Outlet />
      </header>
      <footer className="bg-gray-900 text-gray-300 mt-10 border-t border-gray-700">
        <div className="container mx-auto py-6 px-4 sm:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Column */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-bold text-white mb-1">
                Connecting Talent with Opportunity
              </h2>
              <p className="text-gray-400">
                Empowering job seekers and employers to find the perfect match
                through our innovative platform.
              </p>
            </div>
            {/* Right Column */}
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <a href="#" className="hover:text-green-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-green-500">
                  <FaInstagram />
                </a>
              </div>
              <p className="mb-1 text-gray-400">
                Developed by{" "}
                <span className="text-white font-semibold">Team Astra!</span>
              </p>
              <p className="text-gray-400">
                © {new Date().getFullYear()} Ascend. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
