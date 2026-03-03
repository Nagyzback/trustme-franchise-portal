import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ScalingSection from "@/components/landing/ScalingSection";
import ProductSection from "@/components/landing/ProductSection";
import TechnologiesSection from "@/components/landing/TechnologiesSection";
import StepsSection from "@/components/landing/StepsSection";
import DocumentsSection from "@/components/landing/DocumentsSection";
import FranchiseSection from "@/components/landing/FranchiseSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ScalingSection />
    <ProductSection />
    <TechnologiesSection />
    <StepsSection />
    <DocumentsSection />
    <FranchiseSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
