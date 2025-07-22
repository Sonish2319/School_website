import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FeatureHighlights from "@/components/FeatureHighlights";
import Notice from "@/components/Notice";

export default function Home() {
  return (
    <>
    {/* <Notice /> */}
      <Navbar />
      <Hero />
      <FeatureHighlights />
      <Footer />
    </>
  );
}
