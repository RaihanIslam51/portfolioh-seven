import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFramer, SiJsonwebtokens,
  SiNetlify, SiVercel, SiReactrouter, SiAxios, SiFirebase 
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "React Router", icon: <SiReactrouter className="text-red-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { name: "Axios/TanStack", icon: <SiAxios className="text-blue-300" /> },
    ],
    gradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    title: "Backend & Database",
    icon: <FaNodeJs className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
    gradient: "from-green-600/20 to-green-800/20"
  },
  {
    title: "Tools & Platforms",
    icon: <FaGitAlt className="text-red-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Stripe", icon: <FaStripe className="text-indigo-400" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
    gradient: "from-purple-600/20 to-purple-800/20"
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-blue-600/10 rounded-full border border-blue-500/10 z-0"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-64 -bottom-64 w-[700px] h-[700px] bg-purple-600/10 rounded-full border border-purple-500/10 z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            My comprehensive skill set covers the entire development stack with expertise in modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.gradient} rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5 cursor-default"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <p className="font-medium text-white">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-200">
            Additional Skills & Knowledge
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'ES6+', 'REST APIs', 'Responsive Design', 'Vite', 'Postman', 'VS Code', 'Debugging'
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="px-3 py-1.5 bg-white/10 rounded-full text-sm hover:bg-blue-500/20 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
