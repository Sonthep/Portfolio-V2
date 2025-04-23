'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/projects/ecommerce.png',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app that uses AI to prioritize and categorize tasks. Features natural language processing and automated scheduling.',
    image: '/projects/taskmanager.png',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com/yourusername/ai-tasks',
    demo: 'https://ai-tasks-demo.com',
  },
  {
    title: 'Real-time Chat App',
    description: 'Feature-rich chat application with real-time messaging, file sharing, and video calls. Supports multiple rooms and direct messages.',
    image: '/projects/chatapp.png',
    tech: ['React', 'Socket.io', 'Node.js', 'WebRTC'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-app-demo.com',
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