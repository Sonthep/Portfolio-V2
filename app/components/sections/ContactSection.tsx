'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/Sonthep',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 neon-text text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 space-y-8 max-w-md mx-auto"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-purple text-center">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-center">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-4 text-center">
                  Email
                </h4>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors justify-center"
                >
                  <FiMail />
                  sonthep.simmalee@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-4 text-center">
                  Phone
                </h4>
                <a
                  href="tel:+660645639903"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors justify-center"
                >
                  <FiPhone />
                  0645639903
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-4 text-center">
                  Social Links
                </h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon-blue transition-colors"
                      aria-label={label}
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 