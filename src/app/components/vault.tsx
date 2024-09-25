"use client";
import React, { useState, useEffect } from "react";
import VaultFolder from "./vault_folder";
// import ReactCurvedText from "react-curved-text";

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
      <div className="sticky top-[30%] mb-[30%]">
        {/* <div className="absolute top-0 left-0">
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={50}
            reversed={false}
            text="react-curved-text"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </div> */}
        {/* Bottom Circle */}
        <div className="relative z-10 h-[25rem] w-[25rem] rounded-full flex items-center justify-center border-4 p-2 border-black bg-red-900">
          <img
            src="/images/HackHeist_images/gear.png"
            alt="Vault"
            className="absolute top-0 p-5 fill-black"
            style={{
              transform: `rotate(${rotation / 2}deg)`,
              transition: "left 0.1s ease-out, transform 0.1s ease-out",
            }}
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
          className="absolute overflow-x-clip overflow-y-visible top-0 border-y-4 border-black h-full ml-[50%] bg-red-800 flex items-center"
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
            >
              <img
                src="/images/HackHeist_images/gear.png"
                alt="Vault"
                className="absolute h-[4.5rem] w-[4.5rem] z-10 p-4 fill-black"
                style={{
                  transform: `rotate(${rotation * 5}deg)`,
                  transition: "left 0.1s ease-out, transform 0.1s ease-out",
                }}
              />
              <div className="ml-24 bg-black rounded-full px-4 py-1 font-extrabold text-white whitespace-nowrap">
                Learn about HackPrinceton!
              </div>
            </div>
          </div>
        </div>
        {/* Vault Door */}
        <div
          className={`absolute flex items-center z-40 justify-center text-center text-white w-[25rem] h-[25rem] bg-red-600 border-4 border-black drop-shadow-2xl rounded-full`}
          style={{
            top: "0px",
            left: `${offsetX}px`,
            transform: `rotate(${rotation}deg)`,
            transition: "left 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          <img
            src="/images/HackHeist_images/gear.png"
            alt="Vault"
            className="absolute h-[7rem] invert bottom-[31%] right-[15%] w-[7rem] z-10 p-5"
            style={{
              transform: `rotate(${rotation * 5}deg)`,
              transition: "left 0.1s ease-out, transform 0.1s ease-out",
            }}
          />
          <img
            src="/images/HackHeist_images/gear2.svg"
            alt="Vault"
            className="absolute h-[7rem] bottom-[16%] right-[23%] w-[7rem] z-10 p-5"
            style={{
              transform: `rotate(-${rotation * 5}deg)`,
              transition: "left 0.1s ease-out, transform 0.1s ease-out",
            }}
          />
          {/* Internal Circle */}
          <div className="h-[80%] w-[80%] m-4 absolute border border-black bg-red-600 rounded-full drop-shadow-xl"></div>
          {/* Chains */}
          <img
            src="/images/HackHeist_images/chains.webp"
            alt="Mask"
            className="absolute h-[30%] rounded-full fill-black"
            style={{
              transform: `rotate(-${rotation * 2}deg)`,
              transition: "left 0.1s ease-out, transform 0.1s ease-out",
            }}
          />
          {/* Vault Handle */}
          <div className="rounded-full p-4 flex items-center z-10 bg-black border border-black w-full m-5">
            <span className="z-20 font-extrabold">LOOK INSIDE</span>
            <div className="absolute z-20 flex justify-center items-center h-24 w-24 border bg-red-600 drop-shadow-lg border-black rounded-full left-[calc(50%-3rem)]">
              <img
                src="/images/HackHeist_images/mask.png"
                alt="Mask"
                className="absolute h-[70%] rounded-full border border-black"
                style={{
                  transform: `rotate(-${rotation * 2}deg)`,
                  transition: "left 0.1s ease-out, transform 0.1s ease-out",
                }}
              />
            </div>
            <img
              src="/images/HackHeist_images/gear.png"
              alt="Vault"
              className="absolute h-48 w-48 z-10 p-5 fill-black"
              style={{
                transform: `rotate(${rotation * 2}deg)`,
                transition: "left 0.1s ease-out, transform 0.1s ease-out",
              }}
            />
            {/* Mini white gear */}
            <img
              src="/images/HackHeist_images/gear.png"
              alt="Vault"
              className="absolute h-[4.5rem] w-[4.5rem] invert left-[78%] z-10 p-5 fill-black"
              style={{
                transform: `rotate(${rotation * 5}deg)`,
                transition: "left 0.1s ease-out, transform 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
