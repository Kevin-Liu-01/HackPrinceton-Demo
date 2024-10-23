"use client";
import React, { useState, useEffect } from "react";
import VaultFolder from "./vault_folder";
import Image from "next/image";
import VaultImage from "./vault_image";
import { LassoSelectIcon, MouseIcon } from "lucide-react";
// import ReactCurvedText from "react-curved-text";

const Vault = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const SiteURLS = [
    { name: "Home", color: "bg-red-100", link: "/images/promo1.jpg" },
    { name: "About", color: "bg-red-200", link: "/images/promo2.jpg" },
    { name: "Tracks", color: "bg-red-300", link: "/images/promo3.jpeg" },
    { name: "FAQ", color: "bg-[#f78f8f]", link: "/images/promo4.jpeg" },
    { name: "Sponsors", color: "bg-red-400", link: "/images/promo5.jpg" },
    { name: "Resources", color: "bg-red-500", link: "/images/promo6.jpg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // console.log(scrollPosition);
      // if (scrollPosition < 1800) {
      setOffsetX(scrollPosition / 2);
      setRotation(scrollPosition / 2);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-0 sm:h-[350vh] z-20 p-6 relative left-0 hidden sm:inline">
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
          <VaultImage
            url="/images/HackHeist_Images/gear.png"
            height="h-[25rem]"
            width="w-[25rem]"
            left=""
            right=""
            top="top-[0px]"
            down=""
            rotation={rotation / 2}
            invert={""}
            alt="big-gear"
          />
        </div>
        {/*Vault handles */}
        <div>
          <Image
            src="/images/HackHeist_Images/vaultdoor.png"
            alt="Vault"
            fill={true}
            className="absolute top-0 z-0"
          />
        </div>
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
              <div
                key={index}
                className="relative group h-full mb-3 w-full ml--6"
              >
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
                WebkitTransform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <VaultImage
                url="/images/HackHeist_Images/gear.png"
                height="h-[4.5rem]"
                width="w-[4.5rem]"
                left=""
                right=""
                top=""
                down=""
                rotation={rotation * 5}
                invert={""}
                alt="black-blocker-gear"
              />
              <div className="ml-24 flex items-center gap-2 bg-black rounded-full px-4 py-1 font-extrabold text-white whitespace-nowrap">
                <LassoSelectIcon /> Learn about HackPrinceton!
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
            WebkitTransform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* White Connector Gear */}
          <VaultImage
            url="/images/HackHeist_Images/gear.png"
            height="h-[7rem]"
            width="w-[7rem]"
            left=""
            right="right-[15%]"
            top=""
            down="bottom-[31%]"
            rotation={rotation * 5}
            invert={"invert"}
            alt="white-connector-gear"
          />
          {/* Alternate gear */}
          <VaultImage
            url="/images/HackHeist_Images/gear2.svg"
            height="h-[7rem]"
            width="w-[7rem]"
            left=""
            right="right-[23%]"
            top=""
            down="bottom-[16%]"
            rotation={rotation * 5}
            invert={""}
            alt="alternate-black-gear"
          />
          {/* Internal Circle */}
          <div className="h-[80%] w-[80%] m-4 absolute border border-black bg-red-600 rounded-full drop-shadow-xl"></div>
          {/* Chains */}
          <img
            src="/images/HackHeist_Images/chains.webp"
            alt="Chains"
            className="absolute h-[30%] rounded-full fill-black"
            style={{
              transform: `rotate(-${rotation * 2}deg)`,
              transition: "left 0.1s ease-out, transform 0.1s ease-out",
              WebkitTransform: "translateZ(0)",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
          {/* Vault Handle */}
          <div className="rounded-full p-4 flex items-center z-10 bg-black border border-black w-full m-5">
            <span className="z-20 flex items-center gap-1 text-sm font-extrabold">
              <MouseIcon /> SCROLL!
            </span>
            <div className="absolute z-20 flex justify-center items-center h-24 w-24 border bg-red-600 drop-shadow-lg border-black rounded-full left-[calc(50%-3rem)]">
              <div className="absolute h-[70%] w-[70%] overflow-hidden rounded-full bg-black border border-black">
                <Image
                  src="/images/HackHeist_Images/mask.png"
                  alt="Mask"
                  fill={true}
                  className="px-2"
                  style={{
                    transform: `rotate(-${rotation * 2}deg)`,
                    transition: "left 0.1s ease-out, transform 0.1s ease-out",
                  }}
                />
              </div>
            </div>
            {/* Random black gear  */}
            <VaultImage
              url="/images/HackHeist_Images/gear.png"
              height="h-[6rem]"
              width="w-[6rem]"
              left="left-[22%]"
              right=""
              top="top-[17%]"
              down=""
              rotation={rotation * 4}
              invert={""}
              alt="test-white-gear"
            />
            {/* Mini white gear */}
            <VaultImage
              url="/images/HackHeist_Images/gear.png"
              height="h-[4.5rem]"
              width="w-[4.5rem]"
              left="left-[78%]"
              right=""
              top=""
              down=""
              rotation={rotation * 5}
              invert={"invert"}
              alt="mini-white-gear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
