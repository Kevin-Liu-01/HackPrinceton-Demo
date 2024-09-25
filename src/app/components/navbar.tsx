"use client";
import React, { useState, useEffect } from "react";
import MLHBanner from "./mlh";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 right-0 rounded-l-full">
      <div className="bg-red-500 flex items-center justify-end w-full h-24 m-4">
        <div className="text-4xl text-center font-extrabold mr-8">
          HACK PRINCETON
        </div>
        <div className="flex text-xl gap-8 mr-24">
          <a href="https://hackprinceton.com">Home</a>
          <a href="https://hackprinceton.com/about">About</a>
          <a href="https://hackprinceton.com/schedule">Tracks</a>
          <a href="https://hackprinceton.com/faq">FAQ</a>
          <a href="https://hackprinceton.com/sponsors">Sponsors</a>
          <a href="https://hackprinceton.com/sponsors">Resources</a>
        </div>
      </div>{" "}
      <MLHBanner />
    </nav>
  );
};

export default Navbar;
