"use client";
import Vault from "./vault";
import { MatrixRainingLetters } from "react-mdr";

const LandingPage = () => {
  return (
    <main
      id="home"
      className="scroll-smooth grid grid-cols-1 sm:grid-cols-2 h-full w-full gap-8 items-center sm:items-start text-white"
    >
      <div className="flex justify-center align-center relative">
        <Vault />
        <div className="absolute z-[5] sm:h-[350vh] overflow-x-clip top-0 left-0">
          <MatrixRainingLetters
            key="foo-bar"
            color="#ff0000"
            custom_class="m-0 sticky top-0 p-0"
          />
        </div>
      </div>
      <div className="flex items-center sm:inline z-10 sm:h-[350vh] h-[100vh] bg-black/10 sm:bg-black/20 backdrop-blur-sm overflow-x-clip p-4 md:p-12">
        <div className="sm:sticky flex flex-col gap-4 sm:top-[38%] sm:mb-[38%]">
          <span className="font-extrabold w-min whitespace-nowrap text-sm sm:text-xl border-2 border-white rounded-lg p-2">
            FALL 2024
          </span>
          <p className="font-extrabold text-xl">HackPrinceton Presents...</p>
          <p className="font-extrabold tracking-wider text-[3.25rem] sm:text-7xl text-red-600">
            <span className=" font-[family-name:var(--font-geist-mono)]">
              H
            </span>
            AC
            <span className=" font-[family-name:var(--font-geist-mono)]">
              K
            </span>
            H
            <span className=" font-[family-name:var(--font-geist-mono)]">
              E
            </span>
            IS
            <span className=" font-[family-name:var(--font-geist-mono)]">
              T
            </span>
          </p>
          <a
            href="https://my.hackprinceton.com/login"
            className="mt-4 bg-white hover:scale-105 transition-all hover:text-red-600 w-min 
            whitespace-nowrap text-black p-3 rounded-xl font-extrabold text-xl sm:text-3xl"
          >
            Apply Now!
          </a>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
