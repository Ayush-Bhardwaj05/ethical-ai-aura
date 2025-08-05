import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import PlatformSection from "@/components/PlatformSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <UseCasesSection />
      <PlatformSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
