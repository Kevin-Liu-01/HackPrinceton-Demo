"use client";
import React, { useEffect, useState } from "react";
import MLHBanner from "./mlh";

interface NavbarButton {
  name: string;
  link: string;
}

const NavbarButton = (props: NavbarButton) => {
  return (
    <a
      className="border border-red-600 rounded-xl p-2 flex items-center justify-center"
      href={props.link}
    >
      {props.name}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed z-50 top-0 w-full">
      <div
        className={`${
          isScrolled
            ? "bg-black border border-x-0 border-t-0 border-b-red-600"
            : "bg-black/50 border border-b-red-600 rounded-[2.5rem] m-4"
        } relative flex items-center transition-all drop-shadow-lg h-20 duration-300 px-4 py-2`}
      >
        <div
          className={`bg-black flex h-12 w-12 overflow-hidden items-center justify-center ${
            isScrolled ? "rounded-none" : "rounded-full"
          }`}
        >
          <img
            src="/images/HackHeist_Images/mask.png"
            alt="Mask"
            className="p-2 w-auto"
          />
        </div>
        <div className="flex items-center text-white text-xl ml-4 font-bold relative">
          HackPrinceton{" "}
          <span className="ml-2 bg-yellow-400 text-red-600 text-xs rounded-xl px-2 py-1">
            DEMO
          </span>
        </div>

        <div className=" mx-auto grid grid-cols-6 justify-center items-center gap-4 text-sm">
          <NavbarButton name="Home" link="#home" />
          <NavbarButton name="About" link="#about" />
          <NavbarButton name="Tracks" link="#schedule" />
          <NavbarButton name="FAQ" link="#faq" />
          <NavbarButton name="Sponsors" link="#sponsors" />
          <NavbarButton name="Resources" link="#resources" />
          <MLHBanner />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
