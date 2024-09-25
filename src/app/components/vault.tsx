"use client";
import React, { useState, useEffect } from "react";
import VaultFolder from "./vault_folder";

const Vault = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const SiteURLS = [
    { name: "Home", color: "red" },
    { name: "About", color: "green" },
    { name: "Tracks", color: "yellow" },
    { name: "FAQ", color: "blue" },
    { name: "Sponsors", color: "orange" },
    { name: "Resources", color: "pink" },
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
    <div className="h-[300vh] bg-red-600 p-6 relative left-0">
      <div className="sticky top-[30%]">
        {/* Bottom Circle */}
        <div className="relative h-[400px] w-[400px] rounded-full flex items-center justify-center border-[5px] p-2 border-black bg-red-800">
          {" "}
        </div>

        {/* Folder blocker */}
        <div
          className="z-40 absolute bottom-0 border-y-[5px] border-black h-[50%] ml-[50%] bg-red-800 flex items-center"
          style={{
            width: `${offsetX}px`, // Path stretches as the circle moves
            transition: "width 0.1s ease-out", // Smooth width change
          }}
        ></div>

        {/* Folder Holder */}
        <div
          className="absolute overflow-hidden top-0 border-y-[5px] border-black h-full ml-[50%] z-20 bg-red-800 flex items-center"
          style={{
            width: `${offsetX}px`, // Path stretches as the circle moves
            transition: "width 0.1s ease-out", // Smooth width change
          }}
        >
          {/* Circle folders */}
          <div
            id="folders"
            className="relative transition-all h-[70%] w-full flex items-center p-4 space-x-[-20%]"
          >
            {/* Overlapping circles */}
            {SiteURLS.map((folder, index) => (
              <div key={index} className="relative group h-full w-full ml--6">
                {/* Circle for each folder */}
                <VaultFolder folder={folder} />
              </div>
            ))}
          </div>
        </div>

        {/* Vault Door */}
        <div
          className={`absolute flex items-center z-40 align-center text-center text-white w-[400px] h-[400px] bg-red-600 border-[5px] border-black drop-shadow-xl rounded-full`}
          style={{
            top: "0px",
            left: `${offsetX}px`,
            transform: `rotate(${rotation}deg)`,
            transition: "left 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          {/* Vault Handle */}
          <div className="rounded-full p-4 flex items-center bg-black font-extrabold border border-black w-full m-5">
            LOOK INSIDE
            <div className="absolute flex justify-center items-center h-24 w-24 border-4 bg-red-600 drop-shadow-lg border-black rounded-full left-[calc(50%-3rem)]">
              <img
                src="/images/HackHeist_images/mask.png"
                alt="Mask"
                className="absolute h-[70%] rounded-full border-4 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
