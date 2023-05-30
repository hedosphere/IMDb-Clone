import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="mb-8 md:text-xl py-4 dark:bg-gray-600 bg-amber-100">
      <div className="flex items-center justify-center gap-8">
        <NavItem param="fetchTrending" title="Trending" />
        <NavItem param="fetchTopRated" title="Top Rated" />
      </div>
    </div>
  );
};

export default Navbar;
