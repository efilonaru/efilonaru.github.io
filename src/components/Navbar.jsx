import React from "react";

const Navbar = () => {
  return (
    <nav className="mt-20 px-60 flex items-center justify-between py-6 pb-10">
      <div className="flex items-center justify-center text-base font-jetbrains">
        <nav className="flex gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </nav>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="relative px-1 overflow-hidden group">
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 ease-out group-hover:h-full"></span>
    </a>
  );
};

export default Navbar;
