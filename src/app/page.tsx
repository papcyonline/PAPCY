import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <Stats />
      <ClientLogos />
      <Services />
      <Products />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
      <BackToTop />
    </>
  );
}
