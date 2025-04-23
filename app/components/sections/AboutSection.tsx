'use client';

import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'PostgreSQL', 'Docker',
  'AWS', 'Git', 'REST APIs', 'GraphQL',
];

export const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-8 neon-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div>
              <p className="text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with a love for creating elegant solutions
                to complex problems. With expertise in modern web technologies, I build
                scalable and performant applications that users love.
              </p>
              <p className="text-gray-300">
                My journey in tech started with a curiosity about how things work,
                which evolved into a career crafting digital experiences that make a difference.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-neon-purple">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full neon-border text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-neon-purple">Experience</h3>
            <div className="space-y-6">
              <TimelineItem
                year="2022 - Present"
                title="Senior Full Stack Developer"
                company="Tech Innovators Inc."
                description="Leading development of enterprise web applications"
              />
              <TimelineItem
                year="2020 - 2022"
                title="Full Stack Developer"
                company="Digital Solutions Ltd."
                description="Built and maintained multiple client projects"
              />
              <TimelineItem
                year="2018 - 2020"
                title="Frontend Developer"
                company="Creative Web Agency"
                description="Developed responsive web interfaces"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, company, description }: {
  year: string;
  title: string;
  company: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex gap-4"
  >
    <div className="text-neon-blue font-code whitespace-nowrap">{year}</div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <div className="text-neon-purple">{company}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
); 