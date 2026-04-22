import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INPUT = 'w-full bg-surface border border-white/[0.1] text-zinc-100 font-dm text-sm px-5 py-4 focus:border-accent focus:outline-none placeholder:text-zinc-700 transition-colors duration-300';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="bg-card border border-accent/20 p-14 flex flex-col items-center text-center min-h-[400px] justify-center"
                >
                  <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-black text-white text-3xl mb-3">You're in.</h3>
                  <p className="font-dm text-zinc-500 text-sm max-w-xs leading-relaxed">
                    We'll reach out within 24 hours to schedule your free intro call.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-5">
                  {[
                    { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Alex Chen' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'alex@email.com' },
                  ].map(f => (
                    <div key={f.name} className="space-y-2">
                      <label className="font-dm text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-semibold">{f.label}</label>
                      <input type={f.type} name={f.name} required value={form[f.name]} onChange={onChange} placeholder={f.placeholder} className={INPUT} />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="font-dm text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-semibold">Message</label>
                    <textarea name="message" required value={form.message} onChange={onChange}
                      placeholder="Current score, target score, test date..."
                      rows={5} className={`${INPUT} resize-none`} />
                  </div>
                  <button type="submit"
                    className="w-full bg-accent text-surface font-syne font-bold text-sm tracking-wide py-5 hover:bg-[#29B6F6] transition-colors duration-300 mt-1">
                    Book Your Session
                  </button>
                  <p className="font-dm text-zinc-600 text-xs text-center">
                    Or email <span className="text-accent">emeraldpreptutoring@gmail.com</span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-28 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-syne font-medium text-zinc-600 text-sm">
            © 2025 <span className="text-accent">Tri-Valley Prep</span> · Dublin, CA
          </p>
          <p className="font-dm text-zinc-700 text-xs">Private SAT tutoring for Tri-Valley students.</p>
        </div>
      </div>
    </section>
  );
}
