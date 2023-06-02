import TimingLinks from "@/components/TimingLinks/TimingLinks";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import DivCarousel from "@/components/DivCarousel/DivCarousel";
import Partnership from "@/components/Partnership/Partnership";


export default function Home() {
  return (
   <>
   <TimingLinks/>
   <Navbar/>
   <HeroSection />
   <DivCarousel />
   <Partnership />
   </>
  )
}
