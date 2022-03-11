import React from "react";

const NavContainer = () => {
  return (
    <div>
      <ul className="bg-white flex justify-center items-center overflow-x-auto text-sm  md:text-base lg:text-lg font-bold uppercase tracking-wider">
        <li className="px-3 pt-3 pb-2 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
          Home
        </li>
        <li className="px-3 pt-3 pb-2 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
          About
        </li>
        <li className="px-3 pt-3 pb-2 rounded border-b-4 border-b-transparent hover:border-b-violet-400 cursor-pointer">
          Members
        </li>
      </ul>
    </div>
  );
};

export default NavContainer;
