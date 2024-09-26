"use client";
import Vault from "./vault";
import { MatrixRainingLetters } from "react-mdr";

const LandingPage = () => {
  return (
    <main className="grid grid-cols-2 h-full w-full gap-8 items-center sm:items-start">
      <div className="flex justify-center align-center relative">
        <Vault />
        <div className="absolute z-[5] h-[350vh] overflow-x-clip top-0 left-0">
          <MatrixRainingLetters
            key="foo-bar"
            color="#ff0000"
            custom_class="m-0 sticky top-0 p-0"
          />
        </div>
      </div>
      <div className="z-10 h-[350vh] bg-black/60 overflow-x-clip p-4 ">
        <div className="sticky flex flex-col gap-4 top-[38%] mb-[38%]">
          <span className="font-extrabold w-min whitespace-nowrap text-xl border-2 border-white rounded-lg p-2">
            FALL 2024
          </span>
          <p className="font-extrabold text-4xl">HackPrinceton Presents...</p>
          <p className="font-extrabold tracking-wider text-7xl text-red-600">
            HACKHEIST
          </p>
          <a
            href=""
            className="mt-4 bg-white w-min whitespace-nowrap text-black p-3 rounded-xl font-extrabold text-3xl"
          >
            Apply Now!
          </a>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
