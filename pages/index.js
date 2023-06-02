import TimingLinks from "@/components/TimingLinks/TimingLinks";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import DivCarousel from "@/components/DivCarousel/DivCarousel";
import Partnership from "@/components/Partnership/Partnership";
import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import HaveDone from "@/components/HaveDone/HaveDone";


export default function Home() {
  return (
   <>
   <TimingLinks/>
   <Navbar/>
   <HeroSection />
   <DivCarousel />
   <Partnership />
   <HeroSection2 />
   <HaveDone />
   </>
  )
}
