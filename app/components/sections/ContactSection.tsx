'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FiTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 relative">
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-panel p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-darker-bg/50 border border-neon-blue/20 rounded-md 
                    focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none
                    text-white placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-darker-bg/50 border border-neon-blue/20 rounded-md 
                    focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none
                    text-white placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-darker-bg/50 border border-neon-blue/20 rounded-md 
                    focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none
                    text-white placeholder-gray-400 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="button-neon w-full"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-purple">
                  Let's Connect
                </h3>
                <p className="text-gray-300">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-4">
                  Email
                </h4>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
                >
                  <FiMail />
                  your.email@example.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-4">
                  Social Links
                </h4>
                <div className="flex gap-4">
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