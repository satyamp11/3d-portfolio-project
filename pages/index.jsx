import Home from "../components/Home";
import About from "./about/index";
import Services from "./services/index";
import Work from "./work/index";
import Testimonials from "./testimonials/index";
import Contact from "./contact/index";

export default function MainPage() {
  return (
    <main>

      <section id="home" style={{ overflow: "hidden", position: "relative" }}>
        <Home />
      </section>

      <section id="about" style={{ overflow: "hidden", position: "relative" }}>
        <About />
      </section>

      <section id="services" style={{ overflow: "hidden", position: "relative" }}>
        <Services />
      </section>

      <section id="work" style={{ overflow: "hidden", position: "relative" }}>
        <Work />
      </section>

      <section id="testimonials" style={{ overflow: "hidden", position: "relative" }}>
        <Testimonials />
      </section>

      <section id="contact" style={{ overflow: "hidden", position: "relative" }}>
        <Contact />
      </section>

    </main>
  );
}