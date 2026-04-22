import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'The Edge', href: '#edge' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Tutors', href: '#tutors' },
  { label: 'Reviews', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-syne font-bold text-lg text-white select-none">
          <span className="text-accent">Tri-Valley</span> Prep
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="font-dm text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="font-syne text-xs font-semibold tracking-widest uppercase px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-surface transition-all duration-300">
          Book Now
        </a>
      </div>
    </motion.header>
  );
}
