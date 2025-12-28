import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFileAlt, FaChartLine, FaBullhorn, FaMoneyBillWave, FaUsers, FaLightbulb, FaChartBar } from 'react-icons/fa';
import { SiGoogleanalytics, SiCanva } from 'react-icons/si';

const projects = [
  {
    name: 'Market Research Analysis',
    desc: 'Comprehensive market research study analyzing consumer behavior and market trends in the smartphone industry. Conducted surveys, focus groups, and competitive analysis to identify key opportunities and market gaps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    reportLink: '#',
    presentationLink: '#',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    skillsUsed: [
      { name: 'Market Research', icon: <FaChartBar className="text-blue-400" /> },
      { name: 'Data Analysis', icon: <FaChartLine className="text-green-500" /> },
      { name: 'SWOT Analysis', icon: <FaLightbulb className="text-yellow-400" /> },
      { name: 'Consumer Insights', icon: <FaUsers className="text-purple-400" /> },
    ],
  },
  {
    name: 'Digital Marketing Campaign',
    desc: 'Developed and executed a comprehensive digital marketing strategy for a local startup. Created social media content, managed ad campaigns, and analyzed performance metrics resulting in 45% increase in engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    reportLink: '#',
    presentationLink: '#',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    skillsUsed: [
      { name: 'Digital Marketing', icon: <FaBullhorn className="text-blue-400" /> },
      { name: 'Social Media', icon: <FaUsers className="text-green-500" /> },
      { name: 'Content Strategy', icon: <FaLightbulb className="text-cyan-400" /> },
      { name: 'Analytics', icon: <SiGoogleanalytics className="text-orange-400" /> },
    ],
  },
  {
    name: 'Financial Statement Analysis',
    desc: 'In-depth financial analysis of publicly traded companies including ratio analysis, trend analysis, and valuation. Prepared detailed reports with investment recommendations and risk assessments.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    reportLink: '#',
    presentationLink: '#',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    skillsUsed: [
      { name: 'Financial Analysis', icon: <FaMoneyBillWave className="text-blue-400" /> },
      { name: 'Data Analysis', icon: <FaChartLine className="text-green-500" /> },
      { name: 'Excel Modeling', icon: <FaChartBar className="text-green-400" /> },
      { name: 'Reporting', icon: <FaFileAlt className="text-purple-400" /> },
    ],
  },
  {
    name: 'Business Plan Development',
    desc: 'Created a comprehensive business plan for an e-commerce startup including market analysis, financial projections, marketing strategy, and operational framework. Presented to potential investors and received positive feedback.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    reportLink: '#',
    presentationLink: '#',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    skillsUsed: [
      { name: 'Business Planning', icon: <FaLightbulb className="text-blue-400" /> },
      { name: 'Market Analysis', icon: <FaChartBar className="text-cyan-400" /> },
      { name: 'Financial Planning', icon: <FaMoneyBillWave className="text-green-500" /> },
      { name: 'Presentation', icon: <SiCanva className="text-purple-400" /> },
    ],
  },
];

const ProjectShowSection = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24 select-none">
        <motion.h2
          initial={{ opacity: 0.8, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent inline-block"
        >
          Projects
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mt-3" />
        <motion.p
          initial={{ opacity: 0.8, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg"
        >
          A collection of academic and practical business projects demonstrating analytical skills, strategic thinking, and business acumen.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.8, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row items-center gap-10 md:gap-14 ${project.bgColor} shadow-2xl border border-white/10`}
          >
            <div className="w-full lg:w-1/2 h-auto rounded-2xl overflow-hidden border border-white/20 shadow-lg flex items-center justify-center bg-black/20">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <div className="flex-1 space-y-6 text-left">
              <h3 className="text-3xl md:text-4xl font-bold">{project.name}</h3>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">{project.desc}</p>
              <div className="flex flex-wrap gap-3">
                {project.skillsUsed.map(({ name, icon }, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm md:text-base px-3 py-1.5 bg-black/30 border border-white/20 rounded-lg shadow-sm font-medium">
                    <span className="text-lg md:text-xl">{icon}</span> {name}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={project.reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/70 hover:bg-black transition border border-white/30 text-sm md:text-base shadow-md font-semibold"
                >
                  <FaFileAlt /> View Report
                </a>
                <a
                  href={project.presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition text-sm md:text-base font-semibold shadow-md"
                >
                  <FaExternalLinkAlt /> Presentation
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowSection;
