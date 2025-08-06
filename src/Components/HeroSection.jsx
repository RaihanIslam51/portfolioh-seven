import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Copy, Check, Code2, Sparkles } from "lucide-react"

import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook   } from "react-icons/fa";
import { useNavigate } from "react-router";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "JavaScript Developer",
  "Tech Enthusiast",
]

const codeSnippet = `// Professional Profile
const developer = {
  name: 'Md.Raihan Islam',
  title: 'Junior MERN Stack Developer',
  expertise: ['React', 'Node.js', 'Express', 'MongoDB'],
  availability: 'Open for opportunities',
  contact: 'mdraihan51674@gmail.com',
};

console.log('Ready to build amazing things! 🚀');`

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
]

// Custom Typewriter Hook
function useTypewriter(words, speed = 100, deleteSpeed = 50, delaySpeed = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), delaySpeed)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delaySpeed])

  return currentText
}

// Custom Tooltip Component
function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false)

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
  )
}

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const typewriterText = useTypewriter(roles)
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const downloadResume = () => {
    // navigate("./rakib-resume.pdf")
    navigate("/")
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Floating Elements */}
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
              I architect and build scalable web applications with cutting-edge technologies. Passionate about writing
              clean, maintainable code and delivering seamless user experiences that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <a href="/rakib-resume.pdf" download={"MD-Tanvir-Islam-Rakib-Resume.pdf"} className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Tooltip key={index} content={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-slate-700/50 text-slate-400 ${social.color} ${social.bgColor} rounded-lg transition-all duration-300 hover:scale-110`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Tooltip>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
              <div className="bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm font-mono">profile.js</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-2 px-3 py-1 text-slate-400 hover:text-white transition-colors rounded hover:bg-slate-700/50"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm">Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-6 bg-slate-950/50">
                  <pre className="text-sm lg:text-base font-mono text-slate-300 leading-relaxed overflow-x-auto">
                    <code className="language-javascript">
                      <span className="text-slate-500">// Professional Profile</span>
                      {"\n"}
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span>{" "}
                      <span className="text-slate-300">=</span> <span className="text-yellow-400">{"{"}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-green-400">name</span>
                      <span className="text-slate-300">:</span>{" "}
                      <span className="text-orange-400">'MD.Raihan Islam'</span>
                      <span className="text-slate-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-green-400">title</span>
                      <span className="text-slate-300">:</span>{" "}
                      <span className="text-orange-400">'Junior MERN Stack Developer'</span>
                      <span className="text-slate-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-green-400">expertise</span>
                      <span className="text-slate-300">:</span> <span className="text-yellow-400">[</span>
                      <span className="text-orange-400">'React'</span>
                      <span className="text-slate-300">,</span> <span className="text-orange-400">'Node.js'</span>
                      <span className="text-slate-300">,</span> <span className="text-orange-400">'Express'</span>
                      <span className="text-slate-300">,</span> <span className="text-orange-400">'MongoDB'</span>
                      <span className="text-yellow-400">]</span>
                      <span className="text-slate-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-green-400">availability</span>
                      <span className="text-slate-300">:</span>{" "}
                      <span className="text-orange-400">'Open for opportunities'</span>
                      <span className="text-slate-300">,</span>
                      {"\n"}
                      {"  "}
                      <span className="text-green-400">contact</span>
                      <span className="text-slate-300">:</span>{" "}
                      <span className="text-orange-400">'mdraihan51674@gmail.com'</span>
                      {"\n"}
                      <span className="text-yellow-400">{"}"}</span>
                      <span className="text-slate-300">;</span>
                      {"\n\n"}
                      <span className="text-blue-400">console</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-slate-300">(</span>
                      <span className="text-orange-400">'Ready to build amazing things! 🚀'</span>
                      <span className="text-slate-300">);</span>
                    </code>
                  </pre>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-3 bg-slate-800/30 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>ES6 JavaScript</span>
                  </div>
                  <div className="text-xs text-slate-500">Lines: 12 | Characters: 284</div>
                </div>
              </div>

              {/* Floating Elements around code block */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
