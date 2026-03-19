import ResumeButton from "./ResumeButton";
import { motion } from "framer-motion";
import ParticlesContainer from "./ParticlesContainer";
import ProjectsBtn from "./ProjectsBtn";
import Avatar from "./Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[60px] xl:pt-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/b-explosion.png')" }}
      />

      <div className="absolute inset-0 z-10">
        <ParticlesContainer />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-transparent z-2" />

      <div className="container mx-auto relative z-20 text-center xl:text-left">

        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="h2"
        >
          Hi I'm <br />
          Satyam <span className="text-accent">Paswan</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          className="max-w-xl mx-auto xl:mx-0 mb-4"
        >
          Passionate about creating modern web experiences. 
          I'm an IT student focused on Web Development and UI/UX Design, 
          building clean, responsive and interactive applications.
        </motion.p>

        <ProjectsBtn />
        <ResumeButton />

      </div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        className="hidden xl:block absolute right-[2%] bottom-0 z-20 w-[494px]"
      >
        <Avatar />
      </motion.div>

    </section>
  );
};

export default Home;
