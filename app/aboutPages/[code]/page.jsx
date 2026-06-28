import AboutBanner from "../../_component/_aboutUs/_abouts_banner/AboutBanner";
import AboutSection from "../../_component/_aboutUs/_about/About";
import PropertyServices from "../../_component/_aboutUs/_about/PropertyServices";
import CTASection from "../../_component/_aboutUs/_about/CTASection";
import FunfactSection from "../../_component/_aboutUs/_about/FunfactSection";
import ContactSection from "../../_component/_contact/_contactUs/ContactSection";
import Testimonials from "../../_component/_homePages/Testimonials";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return true;
}

export default async function Page() {
  await getData();

  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <PropertyServices />
      <CTASection />
      <FunfactSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}