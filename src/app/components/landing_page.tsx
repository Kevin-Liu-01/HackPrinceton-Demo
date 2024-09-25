import Vault from "./vault";

const LandingPage = () => {
  return (
    <main className="grid grid-cols-2 h-full gap-8 items-center sm:items-start">
      <Vault />
      <div className="bg-red-600"></div>
    </main>
  );
};

export default LandingPage;
