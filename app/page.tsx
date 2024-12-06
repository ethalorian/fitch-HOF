import HeroSection from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
        <HeroSection/>
      <Footer />
    </>
  );
}
