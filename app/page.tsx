import HeroSection from "./component/hero";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Footer/>
    </>
  );
}
