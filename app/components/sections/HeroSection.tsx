'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMatrixRain } from '../MatrixRainContext';

const terminalLines = [
  'Initializing portfolio...',
  'Loading skills and experience...',
  'Establishing connection...',
  'System ready.',
];

export const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const { setShowMatrixRain } = useMatrixRain();

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < terminalLines.length; i++) {
        setCurrentLine(i);
        const line = terminalLines[i];
        let text = '';
        for (const char of line) {
          text += char;
          setDisplayedText(text);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Show matrix rain after "System ready" is displayed
        if (line === 'System ready.') {
          setShowMatrixRain(true);
        }
      }
      setShowContent(true);
    };

    typeText();
  }, [setShowMatrixRain]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Grid background with glow effect */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
      
      {/* Terminal output */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 mb-8 w-full max-w-2xl"
      >
        <div className="font-code text-sm">
          <div className="text-neon-green mb-2">$ portfolio.exe</div>
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="text-neon-blue">
              {index === currentLine ? displayedText : line}
              {index === currentLine && <span className="animate-terminal-cursor">_</span>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="neon-text">Welcome to my portfolio</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-neon-purple">
            Full Stack Developer
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            I design and build web applications
          </p>
          <div className="flex gap-4 justify-center">
            <button className="button-neon">
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="button-neon bg-transparent border-2 border-neon-purple hover:bg-neon-purple/20 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}; 