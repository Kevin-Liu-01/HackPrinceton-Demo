"use client";
import React, { useEffect, useState } from "react";
import MLHBanner from "./mlh";
import { MenuIcon } from "lucide-react";

interface NavbarButton {
  name: string;
  link: string;
}

const NavbarButton = (props: NavbarButton) => {
  return (
    <a
      className="border border-red-600 font-semibold hover:bg-red-600/30 hover:scale-105 transition-all rounded-xl px-2 py-4 flex items-center justify-center"
      href={props.link}
    >
      {props.name}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const MobileNavbarButton = (props: NavbarButton) => {
    return (
      <a
        className="w-full text-xl font-semibold hover:bg-red-600/30 hover:scale-105 transition-all p-2 flex items-center justify-center"
        href={props.link}
        onClick={() => setIsMenuOpen(false)}
      >
        {props.name}
      </a>
    );
  };

  return (
    <nav
      className="fixed z-50 top-0 w-full text-white"
      style={{
        // WebkitTransform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      <div
        className={`${
          isScrolled
            ? "bg-black border border-x-0 border-t-0 border-b-red-600 "
            : "bg-black/10 border border-b-red-600 rounded-[2.5rem] m-4 backdrop-filter backdrop-blur-sm"
        } relative z-20 flex items-center transition-all drop-shadow-lg h-20 duration-300 px-4 py-2`}
        style={{
          // WebkitTransform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <div
          className={`bg-black flex h-12 w-12 overflow-hidden items-center justify-center ${
            isScrolled ? "rounded-none" : "rounded-full"
          }`}
          style={{
            // WebkitTransform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
        >
          <img
            src="/images/HackHeist_Images/mask.png"
            alt="Mask"
            className="p-2 w-auto"
          />
        </div>
        <div className="flex items-center text-white text-xl ml-4 font-bold relative">
          HackPrinceton{" "}
          {/* <span className="ml-2 bg-yellow-400 text-red-600 text-xs rounded-xl px-2 py-1 font-[family-name:var(--font-geist-mono)]">
            DEMO
          </span> */}
        </div>

        {/* Web navigation */}
        <div className="hidden sm:grid mx-auto grid-cols-6 justify-center items-center gap-4 text-sm">
          <NavbarButton name="Home" link="#home" />
          <NavbarButton name="About" link="#about" />
          <NavbarButton name="Tracks" link="#tracks" />
          <NavbarButton name="FAQ" link="#faq" />
          <NavbarButton name="Sponsors" link="#sponsors" />
          <NavbarButton name="Resources" link="#resources" />
          <MLHBanner />
        </div>

        {/* Hamburger Button for mobile */}
        <div className="flex my-auto sm:hidden ml-auto">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile Banner */}
        <div className="absolute transition-all bottom-0 right-0 w-full sm:hidden inline">
          <MLHBanner />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        } overflow-hidden z-10 h-[calc(100vh+7rem)] mt-[-7rem] bg-black/90 absolute w-full transition-all duration-300`}
      >
        <div className="flex mt-[7rem] flex-col items-center text-white pt-6 gap-4 text-sm">
          <MobileNavbarButton name="Home" link="#home" />
          <MobileNavbarButton name="About" link="#about" />
          <MobileNavbarButton name="Tracks" link="#tracks" />
          <MobileNavbarButton name="FAQ" link="#faq" />
          <MobileNavbarButton name="Sponsors" link="#sponsors" />
          <MobileNavbarButton name="Resources" link="#resources" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
