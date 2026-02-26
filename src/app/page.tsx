import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Roles from "@/components/Roles";
import WhyNearshore from "@/components/WhyNearshore";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <Problem />
      <HowItWorks />
      <Roles />
      <WhyNearshore />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
