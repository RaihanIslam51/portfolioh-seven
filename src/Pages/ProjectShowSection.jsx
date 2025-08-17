import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiTailwindcss
} from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";

// ✅ Make sure these files exist in /src/assets/
import FourmHub from "../assets/formuhub.png";
import Inventory from "../assets/Inventory.png";
import JobSearch from "../assets/Jobsearchpng.png";
import TreeEvent from "../assets/TreeEvent.png";

const projects = [
  {
    name: 'ForumHub Community',
    desc: 'ForumHub Community is a modern, interactive discussion platform where users can share knowledge, ask questions, and engage in meaningful conversations. Designed with a clean, responsive interface, ForumHub supports both light and dark modes for enhanced user experience',
    image: FourmHub,
    github: 'https://github.com/RaihanIslam51/AIUB-Dinajpur-Forum',
    live: 'https://dinajpur-forum.web.app',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'framer-motion', icon: <TbBrandFramerMotion className="text-violet-500" /> },
    ],
  },
  {
    name: 'Social Event',
    desc: 'The Social Event Project brings people together to celebrate, connect, and share meaningful experiences. It fosters community spirit through engaging activities, cultural exchange, and collaborative participation.',
    image: TreeEvent,
    github: 'https://github.com/raihan51674/Tree-Plantation-Event',
    live: 'https://tree-plantation-13b0c.web.app',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'Stripe', icon: <FaStripe className="text-blue-400" /> },
    ],
  },
  {
    name: 'Inventory-management',
    desc: 'Mobile Shop Inventory Management System — A comprehensive and user-friendly web application designed to streamline the buying, selling, and inventory management process for mobile phones.',
    image: Inventory,
    github: 'https://github.com/raihan51674/Inventory-management',
    live: 'https://inventory-management-chi-liard.vercel.app',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'framer-motion', icon: <TbBrandFramerMotion className="text-violet-500" /> },
    ],
  },
  {
    name: 'Job Search',
    desc: 'A powerful and intuitive Job Search web application built with the MERN stack that allows users to search, filter, and browse job listings effortlessly. Integrated with external APIs for real-time job data.',
    image: JobSearch,
    github: 'https://github.com/raihan51674/job-search',
    live: 'https://jobhelp.vercel.app',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
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
          A selection of projects showcasing modern technologies, clean interfaces, and scalable solutions.
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
                {project.techStack.map(({ name, icon }, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm md:text-base px-3 py-1.5 bg-black/30 border border-white/20 rounded-lg shadow-sm font-medium">
                    <span className="text-lg md:text-xl">{icon}</span> {name}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/70 hover:bg-black transition border border-white/30 text-sm md:text-base shadow-md font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition text-sm md:text-base font-semibold shadow-md"
                >
                  <FaExternalLinkAlt /> Live Demo
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
