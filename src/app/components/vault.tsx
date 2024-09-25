"use client";
import React, { useState, useEffect } from "react";
import VaultFolder from "./vault_folder";

const Vault = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const SiteURLS = [
    { name: "Home", color: "bg-orange-500" },
    { name: "About", color: "bg-green-500" },
    { name: "Tracks", color: "bg-yellow-500" },
    { name: "FAQ", color: "bg-blue-500" },
    { name: "Sponsors", color: "bg-purple-500" },
    { name: "Resources", color: "bg-pink-500" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setOffsetX(scrollPosition / 2);
      setRotation(scrollPosition / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[350vh] bg-red-600 p-6 relative left-0">
      <div className="sticky top-[30%]">
        {/* Bottom Circle */}
        <div className="relative z-10 h-[25rem] w-[25rem] rounded-full flex items-center justify-center border p-2 border-black bg-red-900">
          <img
            src="/images/HackHeist_images/gear.png"
            alt="Vault"
            className="absolute top-0 p-5 fill-black"
          />
        </div>
        {/*Vault handles */}
        <img
          src="/images/HackHeist_images/vaultdoor.png"
          alt="Vault"
          className="absolute top-0 z-0 fill-black"
        />
        {/* Folder Holder */}
        <div
          className="absolute overflow-x-clip overflow-y-visible top-0 border-y border-black h-full ml-[50%] bg-red-800 flex items-center"
          style={{
            width: `${offsetX}px`, // Path stretches as the circle moves
            transition: "width 0.1s ease-out", // Smooth width change
          }}
        >
          {/* Circle folders */}
          <div
            id="folders"
            className="relative transition-all z-[26] h-[70%] w-full flex items-center p-4 space-x-[-20%]"
          >
            {/* Overlapping circles */}
            {SiteURLS.map((folder, index) => (
              <div key={index} className="relative group h-full w-full ml--6">
                {/* Circle for each folder */}
                <VaultFolder folder={folder} />
              </div>
            ))}
            {/* Folder blocker */}
            <div
              className="z-40 absolute bottom-0 border right-0 w-full rounded-l-full border-black h-[20%] bg-red-700 flex items-center"
              style={{
                width: `${offsetX}px`, // Path stretches as the circle moves
                transition: "width 0.1s ease-out", // Smooth width change
              }}
            ></div>
          </div>
        </div>
        {/* Vault Door */}
        <div
          className={`absolute flex items-center z-40 align-center text-center text-white w-[25rem] h-[25rem] bg-red-600 border border-black drop-shadow-xl rounded-full`}
          style={{
            top: "0px",
            left: `${offsetX}px`,
            transform: `rotate(${rotation}deg)`,
            transition: "left 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          {/* Vault Handle */}

          <div className="rounded-full p-4 flex items-center bg-black border border-black w-full m-5">
            <span className="z-20 font-extrabold">LOOK INSIDE</span>
            <div className="absolute z-20 flex justify-center items-center h-24 w-24 border bg-red-600 drop-shadow-lg border-black rounded-full left-[calc(50%-3rem)]">
              <img
                src="/images/HackHeist_images/mask.png"
                alt="Mask"
                className="absolute h-[70%] rounded-full border border-black"
              />
            </div>
            <img
              src="/images/HackHeist_images/gear.png"
              alt="Vault"
              className="absolute h-48 w-48 z-10 p-5 fill-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
