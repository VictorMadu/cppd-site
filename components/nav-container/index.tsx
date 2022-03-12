import React from "react";

const NavContainer = () => {
  return (
    <ul className="bg-white flex justify-center items-center overflow-x-auto text-sm  md:text-base lg:text-lg font-bold uppercase tracking-wider">
      <li className="px-3 pt-4 pb-3 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
        Home
      </li>
      <li className="px-3 pt-4 pb-3 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
        About
      </li>
      <li className="px-3 pt-4 pb-3 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
        Members
      </li>
    </ul>
  );
};

export default NavContainer;
