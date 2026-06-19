import { motion } from 'framer-motion';

const PROGRAMS = [
  {
    tag: 'SAT Prep',
    title: 'Digital SAT',
    subtitle: 'Math & Reading & Writing',
    features: [
      'Desmos graphing calculator strategy for SAT Math',
      'Digital SAT format, interface & timing strategy',
      'Reading comprehension — structure over summary',
      'Grammar & conventions by rule, not by feel',
      'Weekly full-length practice test reviews',
    ],
    note: 'Taught by tutors who scored 1540–1560 on the SAT.',
    highlight: true,
  },
  {
    tag: 'Integrated Math',
    title: 'Integrated Math 1',
    subtitle: 'Foundations & Problem Solving',
    features: [
      'Linear equations, inequalities & functions',
      'Geometry fundamentals and reasoning',
      'Statistics and data interpretation',
      'Real-world problem solving strategies',
      'Personalized pace — no one gets left behind',
    ],
    note: 'Open to any student currently in or preparing for IM1.',
  },
  {
    tag: 'Integrated Math',
    title: 'Integrated Math 2',
    subtitle: 'Algebra, Geometry & Beyond',
    features: [
      'Quadratic functions and polynomial operations',
      'Triangle theorems and circle geometry',
      'Probability and statistical reasoning',
      'Proofs, logic, and mathematical argumentation',
      'Bridges concepts toward advanced math',
    ],
    note: 'Open to any student currently in or preparing for IM2.',
  },
];

const COHORT_DETAILS = [
  { label: '3 Weeks', sub: 'per cohort' },
  { label: 'Daily', sub: 'morning calls' },
  { label: 'Sun – Sat', sub: 'every day of the week' },
  { label: 'Flexible', sub: 'join the classes that work for you' },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-28 px-6 bg-card border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">What we offer</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            Summer programs.
          </h2>
          <p className="font-dm text-zinc-400 text-base mt-5 max-w-xl leading-relaxed">
            SAT prep and Integrated Math cohorts built for any student who wants to get ahead this summer.
          </p>
        </motion.div>

        {/* Cohort format strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] mb-16 overflow-hidden"
        >
          {COHORT_DETAILS.map((item, i) => (
            <div key={i} className="bg-surface px-6 py-7 flex flex-col gap-1">
              <span className="font-syne font-black text-white text-2xl">{item.label}</span>
              <span className="font-dm text-zinc-500 text-xs tracking-wide">{item.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Program cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`group relative bg-surface border p-10 flex flex-col hover:border-accent/40 transition-all duration-400 overflow-hidden ${
                prog.highlight ? 'border-accent/30' : 'border-white/[0.08]'
              }`}
            >
              {prog.highlight && (
                <span className="absolute top-0 right-0 font-dm text-[9px] tracking-[0.3em] uppercase bg-accent text-surface px-3 py-1 font-semibold">
                  Featured
                </span>
              )}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-600 pointer-events-none" />
              <div className="relative flex flex-col flex-1">
                <span className="inline-block font-dm text-[10px] tracking-[0.35em] uppercase text-accent border border-accent/30 px-3 py-1 mb-8 font-semibold self-start">
                  {prog.tag}
                </span>
                <h3 className="font-syne font-black text-white text-3xl leading-tight mb-1.5">{prog.title}</h3>
                <p className="font-dm text-zinc-500 text-sm mb-8">{prog.subtitle}</p>
                <ul className="space-y-3 mb-9 flex-1">
                  {prog.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-dm text-zinc-400 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/[0.06] pt-5">
                  <p className="font-dm text-zinc-600 text-xs italic">{prog.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
