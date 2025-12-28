import { motion } from 'framer-motion';
import {
  FaBrain,
  FaPalette,
  FaTools
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const AboutSection = () => {

  return (
    <section
      id="about"
      className="relative py-28 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Floating gradient shapes matching HeroSection */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              <img
                src="/fahim.jpg"
                alt="MD. Tanvir Islam Rakib"
                className="rounded-3xl w-full max-w-md object-cover shadow-2xl border-4 border-white/10 group-hover:border-blue-500/30 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                I'm <span className="text-blue-400">Fahim Muntasir</span>
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate <span className="text-blue-400 font-medium">
                  <Typewriter
                    words={[
                      'BBA Student',
                      'Business Analyst',
                      'Marketing Enthusiast',
                      'Finance Learner'
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span> with a focus on developing business acumen and leadership skills to drive organizational success.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <FaBrain className="text-blue-400 text-xl" />
                  </div>
                  <p className="text-gray-300 flex-1">
                    With a strong foundation in business administration and hands-on experience in market analysis, I bridge the gap between theory and practical business solutions.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaTools className="text-purple-400 text-xl" />
                  </div>
                  <p className="text-gray-300 flex-1">
                    I follow strategic business frameworks, apply analytical thinking, and stay updated with market trends to develop effective business strategies.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <FaPalette className="text-indigo-400 text-xl" />
                  </div>
                  <p className="text-gray-300 flex-1">
                    Beyond academics, I'm passionate about entrepreneurship, enjoy participating in business case competitions, and constantly seek to expand my knowledge through research and networking.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;