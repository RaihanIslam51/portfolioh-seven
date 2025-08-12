import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Code2, Sparkles } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "JavaScript Developer",
  "Tech Enthusiast",
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/raihan51674",
    color: "hover:text-gray-300",
    bgColor: "hover:bg-gray-800",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-raihan-islam-b64aab274",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/rayyan.islam.2025",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/+8801956486761",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

function useTypewriter(words, speed = 100, deleteSpeed = 50, delaySpeed = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delaySpeed);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delaySpeed]);

  return currentText;
}

function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap z-50">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const typewriterText = useTypewriter(roles);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  const downloadResume = () => {
    navigate("/Raihan-Resume.pdf");
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-800/50 to-gray-900" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating Blobs */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ ...floatingAnimation, y: [0, -30, 0] }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ ...floatingAnimation, y: [0, 15, 0] }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
      />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ rotate: 360, x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 text-blue-400 text-2xl"
      >
        <Code2 />
      </motion.div>
      <motion.div
        animate={{ rotate: -360, y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-1/3 text-purple-400 text-2xl"
      >
        <Sparkles />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MD.Raihan Islam
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 min-h-[1.2em]">
                  {typewriterText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="text-blue-400 ml-1"
                  >
                    |
                  </motion.span>
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl"
            >
              I specialize in building modern web applications with the MERN stack. Passionate about creating efficient,
              scalable solutions with clean code and intuitive user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <button
                onClick={downloadResume}
                className="group relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Tooltip key={index} content={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`relative overflow-hidden inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-slate-700/50 text-slate-400 ${social.color} ${social.bgColor} rounded-lg transition-all duration-300 hover:scale-110`}
                      >
                        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                        <IconComponent className="w-5 h-5 relative z-10" />
                      </a>
                    </Tooltip>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Modern Image Container with Floating Tech Badges */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                {/* Profile Image */}
                <img
                  src="/Raihan.jpg"
                  alt="MD.Raihan Islam - MERN Stack Developer"
                  className="w-full h-full object-cover"
                />

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 bg-blue-600/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-blue-300 border border-blue-500/30"
                >
                  React.js
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-8 right-8 bg-purple-600/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-purple-300 border border-purple-500/30"
                >
                  Node.js
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute top-16 right-16 bg-green-600/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-green-300 border border-green-500/30"
                >
                  MongoDB
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl z-[-1]"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500/10 blur-xl z-[-1]"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}