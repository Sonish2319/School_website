// import Hero from "@/components/Hero";
// import FeatureHighlights from "@/components/FeatureHighlights";


// export default function Home() {
//   return (
//     <>
//     {/* <Notice /> */}
//       <Hero />
//       <FeatureHighlights />
//     </>
//   );
// }


// src/app/page.jsx
import HeroSection from '../components/Hero';
import SchoolSections from '../components/SchoolSections';
import StudentLife from '../components/StudentLife';
import VibhutiGallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import VoicesSection from '../components/VoicesSection';
import Notice from '../components/Notice';


export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <SchoolSections />
        <StudentLife />
        <VibhutiGallery />
          <Notice />  
          <CTASection />
        <VoicesSection />
      </main>
    </>
  );
}