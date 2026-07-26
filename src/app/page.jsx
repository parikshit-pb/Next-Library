import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/MarqueeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <MarqueeSection />

      <FeaturedBooks />

      <Footer />
    </>
  );
}