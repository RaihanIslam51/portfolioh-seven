import { motion } from 'framer-motion';
import { FaSchool, FaGraduationCap, FaBook, FaAward, FaAtom, FaLaptopCode, FaJava  } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiSharp, SiCplusplus } from 'react-icons/si';
import { PiMathOperationsBold } from 'react-icons/pi';

const EducationSection = () => {
  const educationData = [
     {
      id: 3,
      degree: "Computer Science & Software Engineering(CSSE)",
      institution: "American International University-Bangladesh",
      period: "2023 - Present",
      icon: <FaGraduationCap className="text-green-400 text-3xl" />,
      achievements: [
        { icon: <SiSharp className="text-blue-500" />, text: ".Net Programming" },
        { icon: <FaJava  className="text-red-500" />, text: "Java Programming" },
        { icon: <SiCplusplus className="text-yellow-500" />, text: "C++" },
        { icon: <SiReact className="text-cyan-400" />, text: "web Development" }
      ],
      cardColor: "bg-gradient-to-br from-green-600/20 to-green-800/20",
      accentColor: "border-green-500/30"
    },
    {
      id: 1,
      degree: "Higher School Certificate (HSC)",
      institution: "Saidpur govt Science College",
      period: "2020 - 2022",
      icon: <FaSchool className="text-blue-400 text-3xl" />,
      achievements: [
        { icon: <FaAward className="text-yellow-400" />, text: "GPA: 5.00 (Science)" },
        { icon: <PiMathOperationsBold className="text-purple-400" />, text: "Math, Higher Math" },
        { icon: <FaAtom className="text-red-400" />, text: "Physics, Chemistry" },
        { icon: <FaLaptopCode className="text-blue-300" />, text: "ICT" }
      ],
      cardColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
      accentColor: "border-blue-500/30"
    },
     {
      id: 2,
      degree: "Secondary School Certificate (SSC)",
      institution: "Cantonment Public School & College",
      period: "2018 - 2020",
      icon: <FaSchool className="text-blue-400 text-3xl" />,
      achievements: [
        { icon: <FaAward className="text-yellow-400" />, text: "GPA: 5.00 (Science)" },
        { icon: <PiMathOperationsBold className="text-purple-400" />, text: "Math, Higher Math" },
        { icon: <FaAtom className="text-red-400" />, text: "Physics, Chemistry" },
        { icon: <FaLaptopCode className="text-blue-300" />, text: "ICT" }
      ],
      cardColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
      accentColor: "border-blue-500/30"
    },
   
  ];

  return (
    <section id="education" className="relative py-28 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Education Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            My academic path and specialization in science and technology disciplines
          </p>
        </motion.div>

        {/* Education Cards - Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${edu.cardColor} rounded-3xl overflow-hidden border border-white/10 hover:${edu.accentColor} transition-all duration-300 shadow-xl hover:shadow-blue-500/20`}
            >
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-300 font-medium">{edu.institution}</p>
                    <div className="mt-2 px-3 py-1 bg-white/10 rounded-full text-sm inline-block">
                      {edu.period}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
                    <h4 className="text-lg font-semibold text-white">Achievements & Focus</h4>
                    <div className="flex-1 h-0.5 bg-white/10 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                      >
                        <div className="p-2 bg-white/10 rounded-lg">
                          {achievement.icon}
                        </div>
                        <p className="text-gray-300">{achievement.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Journey Visualization */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <FaBook className="text-blue-400" />
            <span>Academic Progression</span>
          </h3>
          
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-8">
            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-full"></div>
            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-1/2"></div>
          </div>

          <div className="flex justify-between">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-blue-400">
                <FaSchool className="text-blue-400" />
              </div>
              <p className="text-sm font-medium">Science</p>
              <p className="text-xs text-gray-400">2020-2022</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-green-400">
                <FaLaptopCode className="text-green-400" />
              </div>
              <p className="text-sm font-medium">Computer Science</p>
              <p className="text-xs text-gray-400">2023-Present</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-purple-400">
                <SiReact className="text-purple-400" />
              </div>
              <p className="text-sm font-medium">Specialization</p>
              <p className="text-xs text-gray-400">Future</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;