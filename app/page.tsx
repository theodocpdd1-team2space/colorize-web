import HeroVideo from "@/components/home/HeroVideo";
import ClientMarquee from "@/components/home/ClientMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutTheo from "@/components/home/AboutTheo";
import ServicesList from "@/components/home/ServicesList";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import RecentEvents from "@/components/home/RecentEvents";
import HowWeWork from "@/components/home/HowWeWork";
import PackagePreview from "@/components/home/PackagePreview";
import PromoCTA from "@/components/home/PromoCTA";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <ClientMarquee />
      <WhyChooseUs />
      <AboutTheo />
      <ServicesList />
      <FeaturedWorks />
      <RecentEvents />
      <HowWeWork />
      <PackagePreview />
      <PromoCTA />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}
