/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#b700ff',
        'neon-green': '#00ff9d',
        'dark-bg': '#050816',
        'darker-bg': '#030712',
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff' },
          '100%': { textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
} 