'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiNestjs,
} from 'react-icons/si';

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiNestjs, name: 'RESTful API', color: '#E0234E' },
];

export const TechStackSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 neon-text text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech, index }: {
  tech: typeof techStack[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05 }}
      className="glass-panel p-6 flex flex-col items-center justify-center gap-4 group"
    >
      <tech.icon
        size={48}
        className="transition-all duration-300 group-hover:text-neon-blue"
        style={{ color: tech.color }}
      />
      <span className="text-sm font-medium text-gray-300 group-hover:text-neon-blue transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
}; 