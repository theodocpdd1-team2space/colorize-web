import HeroVideo from "@/components/home/HeroVideo";
import ClientMarquee from "@/components/home/ClientMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutTheo from "@/components/home/AboutTheo";
import ServicesList from "@/components/home/ServicesList";
import ProductionCarousel from "@/components/home/ProductionCarousel";
import NetflixDocumentation from "@/components/home/NetflixDocumentation";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import HowWeWork from "@/components/home/HowWeWork";
import PackagePreview from "@/components/home/PackagePreview";
import PromoCTA from "@/components/home/PromoCTA";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <ClientMarquee />
      <WhyChooseUs />
      <ServicesList />
      <ProductionCarousel />
      <NetflixDocumentation />
      <FeaturedWorks />
      <HowWeWork />
      <PackagePreview />
      <AboutTheo />
      <PromoCTA />
      <FAQ />
      <ContactSection />
    </main>
  );
}
