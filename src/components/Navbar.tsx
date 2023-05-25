import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="dark:bg-gray-600 bg-amber-100 py-3 mb-2">
      <div className="flex items-center justify-center gap-8">
        <NavItem param="fetchTrending" title="Trending" />
        <NavItem param="fetchTopRated" title="Top Rated" />
      </div>
    </div>
  );
};

export default Navbar;
