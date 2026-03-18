import { Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/aakash.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const About = () => {
  return (
    <section id="about" className="relative py-28 section-divider overflow-hidden">
      <div className="wrapper relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-14 items-start">
          {/* Left - Profile Card */}
          <motion.div {...fadeUp(0.05)} className="flex flex-col items-center">
            <div
              className="w-48 h-48 rounded-2xl overflow-hidden border-2 mb-6"
              style={{ borderColor: "var(--border-secondary)" }}
            >
              <img src={profileImage} alt="Aakash Deep Yadav" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold theme-text-heading mb-1">Aakash Deep Yadav</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "#00b4d8" }}>Software Developer</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 w-full mb-6">
              {[
                { val: "8+", label: "Projects" },
                { val: "5+", label: "Tech Stacks" },
                { val: "3+", label: "Years" },
              ].map((s, i) => (
                <div key={i} className="glass-card p-3 text-center">
                  <div className="text-lg font-bold" style={{ color: "#00b4d8" }}>{s.val}</div>
                  <div className="text-[10px] theme-text-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-solid w-full justify-center text-sm">
              <Download size={15} /> Download Resume
            </a>
          </motion.div>

          {/* Right - Summary */}
          <motion.div {...fadeUp(0.1)}>
            <div className="space-y-5 mb-8">
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                I'm studying Computer Science at Lovely Professional University. Most of my time goes
                into building web apps and learning how things work under the hood — from how databases
                index queries to how React reconciles the DOM.
              </p>
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                My go-to stack is <span className="font-medium" style={{ color: "#00b4d8" }}>React, Node.js, Python, and MongoDB</span>.
                I've also spent time with <span className="font-medium" style={{ color: "#00b4d8" }}>ML libraries</span> like
                Scikit-Learn and TensorFlow — mostly building recommendation systems and classifiers.
              </p>
              <p className="theme-text-secondary leading-relaxed text-[15px]">
                Lately I've been working with <span className="font-medium" style={{ color: "#00b4d8" }}>LLM APIs</span> and
                building AI agents that can call tools, maintain context, and handle multi-step tasks.
              </p>
            </div>

            {/* What I Bring */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-sm theme-text-heading mb-4 flex items-center gap-2">
                <CheckCircle size={16} style={{ color: "#00b4d8" }} /> Things I'm good at
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "DSA — solved 100+ problems on LeetCode",
                  "REST APIs, auth flows, and database schema design",
                  "Clean Git history, meaningful PRs, code reviews",
                  "Docker, CI/CD, deploying to Vercel and Render",
                  "Working with teammates across timezones",
                  "Taking a feature from idea to production",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: "#00b4d8" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
