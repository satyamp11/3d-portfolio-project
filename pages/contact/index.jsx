import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ Initialize EmailJS (IMPORTANT)
  useEffect(() => {
    emailjs.init("KVI6B4WvHK1SgpuR4");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ FINAL WORKING SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_bwvvsh4",
        "template_xmy8ih4",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: "KVI6B4WvHK1SgpuR4",
        }
      );

      console.log("SUCCESS:", result);

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("ERROR:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-primary/30 flex items-center py-32 relative overflow-hidden">
      <Bulb />
      <Circles />
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[700px]">

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                value={form.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={form.subject}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              value={form.message}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            {status === "success" && (
              <p className="text-green-400">
                ✅ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;