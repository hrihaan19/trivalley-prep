import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section id="contact" className="relative z-10 py-28 px-6 bg-surface border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          >
            <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">Get started</p>
            <h2 className="font-syne font-black text-white leading-none mb-8" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}>
              Book Your<br /><span className="text-accent">Session.</span>
            </h2>
            <p className="font-dm text-zinc-500 text-base leading-relaxed max-w-sm mb-10">
              Start with a free 15-minute intro call. We'll map out where you are,
              where you need to be, and exactly how to close the gap.
            </p>

            <ul className="space-y-4">
              {['Dublin, CA & Tri-Valley area', 'Online sessions available everywhere', 'Flexible scheduling around school', 'Free intro call — no obligation'].map(item => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-6 h-px bg-accent flex-shrink-0" />
                  <span className="font-dm text-zinc-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/trivalleyprep26/intro-call?hide_gdpr_banner=1&background_color=1f1f25&text_color=e4e4e7&primary_color=42c2ff"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </div>

        {/* Service areas footer — keyword-rich, visible to Google */}
        <div className="mt-28 pt-10 border-t border-white/[0.05]">
          <div className="mb-10">
            <p className="font-dm text-zinc-600 text-[11px] tracking-[0.35em] uppercase mb-5 font-semibold">Serving the Tri-Valley &amp; East Bay</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Dublin, CA', 'Pleasanton, CA', 'San Ramon, CA', 'Livermore, CA',
                'Danville, CA', 'Alamo, CA', 'Castro Valley, CA', 'Fremont, CA', 'Walnut Creek, CA',
              ].map(city => (
                <span key={city} className="font-dm text-zinc-600 text-xs">{city}</span>
              ))}
            </div>
            <p className="font-dm text-zinc-700 text-xs mt-4 max-w-lg leading-relaxed">
              SAT tutoring &amp; Integrated Math (IM1 / IM2) for high school and middle school students across the Tri-Valley. Summer cohorts, daily morning sessions, flexible attendance. Online sessions available everywhere.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-syne font-medium text-zinc-600 text-sm">
              © 2026 <span className="text-accent">Tri-Valley Prep</span> · Dublin, CA
            </p>
            <p className="font-dm text-zinc-700 text-xs">SAT tutoring &amp; math tutoring for Tri-Valley students.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
