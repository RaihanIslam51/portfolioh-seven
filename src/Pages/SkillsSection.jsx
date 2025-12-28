import { motion } from 'framer-motion';
import { FaChartLine, FaBriefcase, FaChartBar, FaMoneyBillWave, FaUsers, FaBullhorn, FaLightbulb, FaFileExcel, FaFileWord, FaFilePowerpoint, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import {
  SiTableau, SiSlack, SiTrello, SiNotion
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Business Analysis",
    icon: <FaChartLine className="text-blue-400" />,
    skills: [
      { name: "Market Research", icon: <FaChartBar className="text-orange-500" /> },
      { name: "SWOT Analysis", icon: <FaBriefcase className="text-blue-500" /> },
      { name: "Financial Analysis", icon: <FaMoneyBillWave className="text-cyan-400" /> },
      { name: "Business Planning", icon: <FaLightbulb className="text-yellow-400" /> },
      { name: "Data Analytics", icon: <FaGoogle className="text-blue-400" /> },
      { name: "Excel", icon: <FaFileExcel className="text-green-500" /> },
      { name: "PowerPoint", icon: <FaFilePowerpoint className="text-red-400" /> },
      { name: "Tableau", icon: <SiTableau className="text-blue-300" /> },
    ],
    gradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    title: "Marketing & Communication",
    icon: <FaBullhorn className="text-green-400" />,
    skills: [
      { name: "Digital Marketing", icon: <FaBullhorn className="text-green-500" /> },
      { name: "Social Media", icon: <FaUsers className="text-gray-300" /> },
      { name: "Brand Strategy", icon: <FaLightbulb className="text-green-400" /> },
      { name: "Content Creation", icon: <FaFileWord className="text-blue-400" /> },
      { name: "Presentations", icon: <FaFilePowerpoint className="text-red-400" /> },
    ],
    gradient: "from-green-600/20 to-green-800/20"
  },
  {
    title: "Productivity Tools",
    icon: <FaBriefcase className="text-red-400" />,
    skills: [
      { name: "MS Word", icon: <FaFileWord className="text-blue-500" /> },
      { name: "MS Excel", icon: <FaFileExcel className="text-green-500" /> },
      { name: "MS Teams", icon: <FaMicrosoft className="text-purple-400" /> },
      { name: "Slack", icon: <SiSlack className="text-cyan-300" /> },
      { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
      { name: "Notion", icon: <SiNotion className="text-white" /> },
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
              Business Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            My comprehensive skill set covers business administration, marketing, finance, and analytical tools essential for modern business management.
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
      
      </div>
    </section>
  );
};

export default SkillsSection;
