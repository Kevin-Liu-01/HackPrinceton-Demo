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
      className="border-2 border-red-600 rounded-lg p-2 px-3 flex items-center justify-center"
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
          isScrolled ? "bg-black" : "bg-black/70 rounded-[2.5rem] m-4"
        } relative flex items-center transition-all drop-shadow-lg h-20 duration-300 px-4 py-2`}
      >
        <div
          className={`bg-black flex h-12 w-12 overflow-hidden items-center justify-center ${
            isScrolled ? "rounded-none" : "rounded-full"
          }`}
        >
          <img
            src="/images/HackHeist_images/mask.png"
            alt="Mask"
            className="p-2 w-auto"
          />
        </div>
        <div className="text-white text-xl ml-4 font-bold relative">
          HackPrinceton{" "}
          <span className="absolute mb-8 bg-gray-400 text-black text-xs rounded-xl px-2 py-1">
            DEMO
          </span>
        </div>

        <div className=" mx-auto flex justify-center items-center gap-8 text-sm">
          <NavbarButton name="Home" link="https://hackprinceton.com" />
          <NavbarButton name="About" link="https://hackprinceton.com/about" />
          <NavbarButton
            name="Tracks"
            link="https://hackprinceton.com/schedule"
          />
          <NavbarButton name="FAQ" link="https://hackprinceton.com/faq" />
          <NavbarButton
            name="Sponsors"
            link="https://hackprinceton.com/sponsors"
          />
          <NavbarButton
            name="Resources"
            link="https://hackprinceton.com/resources"
          />
          <MLHBanner />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
