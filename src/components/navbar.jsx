import React from "react";

const Navbar = () => {
  return (
    <section aria-label="navbar">
      <nav className="flex justify-center">
        <ul className="w-[50rem] flex justify-between text-[20px] font-light px-10 py-5 gap-5 fixed top-6 z-20 border-none rounded-2xl bg__navbar">
          <li className="cursor-pointer">Logo</li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Me</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
