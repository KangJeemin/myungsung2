import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CustomerSection from './components/CustomerSection';
import ServicesSection from './components/ServicesSection';
import AiFeatureSection from './components/AiFeatureSection';
import ServicesSection2 from './components/ServicesSection2';
import AiVisionSection from './components/AiVisionSection';
import AiResourcesSection from './components/AiResourcesSection';
import SolutionsSection from './components/SolutionsSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import PartnerSection from './components/PartnerSection';
import ESGSection from './components/ESGSection';
import NewsSection from './components/NewsSection';
import ECOPostSection from './components/ECOPostSection';
import LocationSection from './components/LocationSection';
import FloatingActions from './components/FloatingActions';
import CareersContent from './components/CareersContent';
import EvolutionSection from './components/EvolutionSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiFeatureSection />
      <ServicesSection />
      <AboutSection />
      <CustomerSection />
      <StatsSection />
      <TeamSection />
      <PartnerSection />
      <ECOPostSection />
      <ESGSection />
      <NewsSection />
      <EvolutionSection />
      <CareersContent />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </>
  );
}
