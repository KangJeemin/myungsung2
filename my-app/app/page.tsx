import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CustomerSection from './components/CustomerSection';
import ServicesSection2 from './components/ServicesSection2';
import AiVisionSection from './components/AiVisionSection';
import AiResourcesSection from './components/AiResourcesSection';
import SolutionsSection from './components/SolutionsSection';
import StatsSection from './components/StatsSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import PartnerSection from './components/PartnerSection';
import ESGSection from './components/ESGSection';
import NewsSection from './components/NewsSection';
import HistorySection from './components/HistorySection';
import ECOPostSection from './components/ECOPostSection';
import LocationSection from './components/LocationSection';
import FloatingActions from './components/FloatingActions';
import CareersContent from './components/CareersContent';
import CertificationSection from './components/CertificationSection';
import EvolutionSection from './components/EvolutionSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection2 />
      <AboutSection />

      <CustomerSection />

      {/* <SolutionsSection /> */}
      <StatsSection />

      {/* <ContactSection /> */}
      <TeamSection />
      <PartnerSection />
      {/* <CertificationSection /> */}
      <ECOPostSection />
      <ESGSection />
      <NewsSection />
      {/* <HistorySection /> */}
      <EvolutionSection />
      <CareersContent />

      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </>
  );
}
