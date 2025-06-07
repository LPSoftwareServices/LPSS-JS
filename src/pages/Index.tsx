
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import ServicesSection from "@/components/ServicesSection";
import HiringProcess from "@/components/HiringProcess";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <HiringProcess />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
