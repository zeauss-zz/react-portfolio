import AboutSection from "../../components/about-section/about-section.component";
import FaqSection from "../../components/faq-section/faq-section.component";
import ServicesSection from "../../components/services-section/services-section.component";
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation.js';

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
