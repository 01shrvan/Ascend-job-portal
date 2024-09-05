import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <header className="min-h-screen container">
        <Header />
        <Outlet />
      </header>
      <div className="flex justify-between items-center p-10 bg-gray-900 text-gray-300 mt-10 border-t border-gray-700">
        <div className="w-1/2 text-left">
          <h2 className="text-lg font-semibold mb-2">
            Connecting Talent with Opportunity
          </h2>
          <p className="mb-4">
            Empowering job seekers and employers to find the perfect match
            through our innovative platform.
          </p>
        </div>
        <div className="w-1/2 text-right">
          <p className="mt-4">© 2024 Ascend. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
