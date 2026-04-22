import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01', title: 'Book Intro Call',
    desc: "A free 15-minute call to assess your score, target, and test date. No commitment.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" /></svg>,
  },
  {
    num: '02', title: 'Get Your Plan',
    desc: 'A custom roadmap built around your test date, weak areas, and score targets. No generic curriculum.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
  },
  {
    num: '03', title: 'Score Higher',
    desc: 'Weekly 1:1 sessions with ongoing tests, score tracking, and strategy adjustments until test day.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>,
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative z-10 py-28 px-6 bg-surface border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">The process</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            How It Works.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative bg-card border border-white/[0.08] p-10 hover:border-accent/40 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-600 pointer-events-none" />
              <div className="relative">
                <div className="absolute -top-2 -right-2 font-syne font-black text-[6rem] leading-none text-white/[0.03] select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center text-accent mb-8 group-hover:border-accent/60 transition-colors duration-300">
                  {step.icon}
                </div>
                <p className="font-dm text-xs tracking-[0.3em] uppercase text-zinc-600 mb-3 font-semibold">Step {step.num}</p>
                <h3 className="font-syne font-bold text-white text-xl mb-3">{step.title}</h3>
                <p className="font-dm text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a href="#contact"
            className="group inline-flex items-center gap-3 bg-accent text-surface font-syne font-bold text-sm px-10 py-4 hover:bg-[#29B6F6] transition-colors duration-300">
            Start with a Free Call
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
