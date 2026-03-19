import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImage from "../assets/aakash.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div id="about" className="absolute top-0" aria-hidden="true" />
      <div className="wrapper w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 py-28 lg:py-0">
          {/* Text */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.p
              className="text-sm font-medium tracking-widest uppercase mb-5"
              style={{ color: "#00b4d8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Software Developer
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 theme-text-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              I'm <span style={{ color: "#00b4d8" }}>Aakash Deep</span> Yadav
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-lg mb-10 theme-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              I am a software developer focused on building practical digital
              products. I specialize in full-stack development and AI-enabled
              workflows to solve real-world problems with clean, scalable code.
            </motion.p>

            <motion.div
              className="max-w-2xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(0, 180, 216, 0.1), rgba(15, 23, 42, 0.15))",
                  border: "1px solid var(--border-secondary)",
                }}
              >
                <p className="text-sm sm:text-base leading-relaxed theme-text-secondary">
                  I build practical products from ideas, with strong foundations
                  in React, Node.js, databases, and Python-based AI/ML
                  integration. My focus is to combine creativity with
                  engineering discipline to deliver reliable systems that scale
                  and create measurable impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a href="#projects" className="btn-solid">
                See My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden"
              style={{ border: "2px solid var(--border-secondary)" }}
            >
              <img
                src={profileImage}
                alt="Aakash Deep Yadav"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 theme-text-faint hover:text-cyan-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
