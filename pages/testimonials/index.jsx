import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <section className="bg-primary/30 py-24 text-center">
      <div className="container mx-auto flex flex-col items-center">

        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-10"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-[900px]"
        >
          <TestimonialSlider />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;