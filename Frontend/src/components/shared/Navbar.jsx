import React from "react";

const NavBar = () => {
  return (
    
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Work<span className="text-[#f83002]">Brio</span>
            </h1>
          </div>
          <div>
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Jobs</li>
              <li>Browse</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default NavBar;
