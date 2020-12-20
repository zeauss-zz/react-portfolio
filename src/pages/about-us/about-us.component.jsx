import AboutSection from "../../components/about-section/about-section.component";
import FaqSection from "../../components/faq-section/faq-section.component";
import ServicesSection from "../../components/services-section/services-section.component";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation.js";
import ScrollTop from "../../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
