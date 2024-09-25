"use client";
import Vault from "./vault";
import { MatrixRainingLetters } from "react-mdr";

const LandingPage = () => {
  return (
    <main className="grid grid-cols-2 h-full w-full gap-8 items-center sm:items-start">
      <div className="flex z-20 justify-center align-center relative bg-red-600">
        <Vault />
      </div>
      <div className="z-10 h-[350vh] overflow-x-clip ">
        <MatrixRainingLetters
          key="foo-bar"
          color="#ff0000"
          custom_class="m-0 sticky top-0 p-0"
        />
      </div>
    </main>
  );
};

export default LandingPage;
