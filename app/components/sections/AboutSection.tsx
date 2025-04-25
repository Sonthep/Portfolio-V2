'use client';

import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'PostgreSQL', 'Docker',
  'AWS', 'Git', 'REST APIs', 'GraphQL',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-8 neon-text text-center">About Me</h2>
          
          <div className="flex justify-center">
            {/* Profile Image */}
            <div className="flex justify-center items-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <img
                    src="/profile/profile resume.jpg"
                    alt="Profile"
                    className="w-64 h-64 object-cover rounded-lg border-2 border-neon-purple"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker-bg to-transparent opacity-50 rounded-lg"></div>
            </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-neon-purple">Experience</h3>
            <div className="space-y-6">
              <TimelineItem
                year="Mar 2024 – Nov 2024"
                title="Kissflow Developer (CRM System)"
                company="VBix Innovation Co., Ltd / Nonthaburi"
                description="Developed and customized a CRM system for solar panel customer management using Kissflow platform. Integrated approval flows, customer onboarding processes, and real-time dashboard reports. Built custom logic for follow-ups, quotations, and service requests. Delivered system training and user support."
              />
              <TimelineItem
                year="June 2022 – Nov 2022"
                title="Programmer C# Developer"
                company="Thai-German Specialty Glass Co., Ltd. (TGSG) / Bangkok"
                description="Designed and developed internal web applications for generating automated invoice and receipt reports. Utilized ASP.NET Framework, C#, Bootstrap 5, and SQL Server. Automated financial reporting processes and built responsive UI with real-time data access."
              />
              <TimelineItem
                year="July 2021 – October 2021"
                title="Front End Developer Intern"
                company="Coding advisor Co., Ltd / Bangkok"
                description="Developed front-end websites using HTML, CSS, and JavaScript. Collaborated with designers to translate mockups into functional websites. Worked on front-end and back-end systems across various platforms."
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