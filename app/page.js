"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-grid min-h-screen px-6 md:px-20">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-xl"
        >
          CAD Designer & Developer building precise systems and modern interfaces.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section className="py-32">
        <h2 className="text-3xl font-semibold mb-16">Projects</h2>

        <div className="space-y-20">

          {/* PROJECT CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-[#111] p-6 rounded-2xl glow"
          >
            <img
              src="/cad1.jpg"
              alt="CAD Project"
              className="rounded-xl"
            />

            <div>
              <h3 className="text-2xl font-bold mb-4">CAD Model</h3>
              <p className="text-gray-400 mb-4">
                High precision mechanical design with detailed assemblies.
              </p>

              <div className="flex gap-4">
                <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "SolidWorks",
            "Fusion 360",
            "JavaScript",
            "Python",
            "React",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-400">
          I specialize in CAD design and software development, combining
          engineering precision with modern UI design to create high-quality
          digital experiences.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-32">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-4">
          your@email.com
        </p>
      </section>

    </main>
  );
}
