import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <ClientLogos />
      <Newsletter />
      <Footer />
    </>
  );
}
