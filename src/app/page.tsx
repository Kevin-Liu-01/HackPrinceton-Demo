// "use client";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landing_page/landing_page";
import About from "./components/about";
import Tracks from "./components/tracks";
import FAQ from "./components/faq";
import Contributors from "./components/contributors";
import Resources from "./components/resources";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden sm:overflow-x-clip bg-black grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <LandingPage />
      <About />
      <Tracks />
      <FAQ />
      <Contributors />
      <Resources />
      <Footer />
    </div>
  );
}
