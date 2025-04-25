'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'BrainTraining Mobile App',
    description: 'Elevate cognitive abilities with personalized challenges and engaging exercises. Features adaptive difficulty, progress tracking, social engagement, and gamification. Developed with Flutter, Dart, Firebase, SQLite, TensorFlow, and Google Colab for seamless performance and advanced machine learning.',
    image: '/projects/mobile.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'TensorFlow', 'Google Colab'],
    github: 'https://github.com/Sonthep/braintrainingV2-main',
    demo: 'https://github.com/Sonthep/braintrainingV2-main',
  },
  {
    title: 'Portfolio Website',
    description: 'This project portfolio website utilizes the latest web development technologies to create a modern, interactive, and visually appealing platform to showcase your skills and experiences.',
    image: '/projects/portfolio.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'API'],
    github: 'https://github.com/Sonthep/nextjs-portfolioV1',
    demo: 'https://nextjs-portfolio-sonthep.netlify.app/',
  },
  {
    title: 'ThepAPI',
    description: 'A dynamic web application that fetches data from an external API and displays it in a user-friendly interface built with React.js and styled with Tailwind CSS.',
    image: '/projects/shop.png',
    tech: ['React', 'Tailwind CSS', 'API'],
    github: 'https://github.com/Sonthep/react_router_api',
    demo: 'https://thepapi.netlify.app/',
  },
  {
    title: 'Authentication Clerk',
    description: 'Authentication Clerk is a web application built using React.js, Tailwind CSS, and Clerk. The project aims to provide a seamless authentication experience for users.',
    image: '/projects/clerk.png',
    tech: ['React', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/Sonthep/clerk',
    demo: 'https://reactauthclerk.netlify.app/',
  },
  {
    title: 'Todo List',
    description: 'The Todo List project is a simple yet powerful web application built using React.js and styled with Tailwind CSS. It provides users with a clean and intuitive interface to manage their tasks efficiently.',
    image: '/projects/todolist.png',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Sonthep/todolist1',
    demo: 'https://todoapp4575.netlify.app/',
  },
  {
    title: 'Currency Converter',
    description: 'The Currency Converter project is a web application built using the React js framework, Tailwind CSS for styling, and an API for fetching currency exchange rates.',
    image: '/projects/currency.png',
    tech: ['React', 'Tailwind CSS', 'API'],
    github: 'https://github.com/Sonthep/currency-converter',
    demo: 'https://currencyconvert157.netlify.app/',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 neon-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { 
  project: typeof projects[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass-panel overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darker-bg opacity-60" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-neon-purple">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full border border-neon-blue/30 text-neon-blue"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-blue transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-blue transition-colors"
            aria-label={`View ${project.title} live demo`}
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}; 