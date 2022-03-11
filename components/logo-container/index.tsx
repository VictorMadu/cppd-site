import React from "react";
import Image from "next/image";

const LogoContainer = () => {
  return (
    <div className="flex justify-center 2xl:justify-center items-center gap-x-2 lg:gap-x-8 2xl:gap-x-24 font-bold 2xl:text-5xl px-[2%] py-3">
      <div className="w-12 h-12 relative">
        <Image
          src="/imgs/logo.png"
          alt="logo"
          layout="fill"
          className="object-cover"
        />
      </div>
      <span className="hidden lg:inline text-2xl xl:text-3xl 2xl:text-4xl uppercase text-violet-700">
        CENTRE FOR PROMOTION OF PEACE AND DEVELOPMENT
      </span>
      <span className="text-violet-700 lg:text-zinc-900 lg:text-opacity-80 text-2xl lg:text-lg xl:text-xl 2xl:text-3xl lg:italic">
        (CPPD) NIGERIA
      </span>
    </div>
  );
};

export default LogoContainer;
