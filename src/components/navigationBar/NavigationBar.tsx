"use client";

import { DesktopNav } from "./DesktopNav";
import { WebsiteOwner } from "./WebsiteOwner";

const NavigationBar = () => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-transparent py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <WebsiteOwner />
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
