import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaGithub as FaGithubIcon } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFramer, SiJsonwebtokens, SiNetlify, SiVercel, SiReactrouter, SiFirebase, SiSoundcharts } from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";
import { motion } from 'framer-motion';

import historiVault from "../assets/historiVault.PNG";
import taskHub from "../assets/freelance-task.PNG";
import eventify from "../assets/event.PNG";
import madicare from "../assets/madicare.PNG";
import microJob from "../assets/microjob.PNG"

const projects = [
  {
    name: 'MicroJob',
    desc: 'The Micro Tasking and Earning Platform is a role-based web application where users can earn by completing small tasks or create paid tasks for others. It features secure authentication, dynamic dashboards, and real-time coin-based transactions.',
    image: microJob,
    github: 'https://github.com/mdtanvirislamrakib/Micro-Job-Website-Client',
    live: 'https://microjob-website.netlify.app/',
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
    name: 'HistoriVault',
    desc: 'A full-stack MERN-based web application designed to preserve and showcase historical artifacts like the Rosetta Stone, Antikythera Mechanism, and many more. Users can explore, like, and contribute their own historical findings, all within a sleek, interactive, and secure interface.',
    image: historiVault,
    github: 'https://github.com/mdtanvirislamrakib/Historical-Artifacts-Website',
    live: 'https://historical-artifacts.netlify.app/',
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
    name: 'TaskHub',
    desc: 'TaskHub is a full-stack web application that allows users to post freelance tasks, bid on them, and manage task-based collaborations. It provides dynamic task listings, real-time bid updates, secure authentication, and an engaging user dashboard — all wrapped in a sleek, responsive interface.',
    image: taskHub,
    github: 'https://github.com/mdtanvirislamrakib/Freelance-task-marketplace-client',
    live: 'https://freelance-task-matketplace.netlify.app/',
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
  {
    name: 'Eventify',
    desc: 'Event Explorer is a responsive single-page application built with React, designed to help users discover and explore upcoming local events like conferences, art exhibitions, sports events, and more. Authenticated users can view detailed event pages, reserve seats, and manage their profiles.',
    image: eventify,
    github: 'https://github.com/mdtanvirislamrakib/Event-Explorer-Website',
    live: 'https://eventify-explore-events.netlify.app/',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
    ],
  },
  {
    name: 'MediCare',
    desc: 'MediCare is a responsive, frontend-only medical web application built using modern web technologies like React and Tailwind CSS. It is designed to provide a clean, intuitive, and professional user interface for showcasing medical services, doctor profiles, statistics, and health-related content.',
    image: madicare,
    github: 'https://github.com/mdtanvirislamrakib/PHUDU-Medical',
    live: 'https://splendid-stroopwafel-1f5da0.netlify.app/',
    bgColor: 'bg-gradient-to-br from-gray-900 via-blue-900 to-violet-950',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'GitHub', icon: <FaGithubIcon className="text-gray-200" /> },
      { name: 'Recharts', icon: <SiSoundcharts className="text-sky-400" /> },
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