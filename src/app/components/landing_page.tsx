import Vault from "./vault";

const LandingPage = () => {
  return (
    <main className="grid grid-cols-2 h-full w-full gap-8 items-center sm:items-start">
      <div className="flex justify-center align-center relative bg-red-200">
        <Vault />
      </div>
      <div className="bg-red-600"></div>
    </main>
  );
};

export default LandingPage;
