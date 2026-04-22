import { motion } from 'framer-motion';

const SERVICES = [
  {
    tag: 'Math',
    title: 'Digital SAT Math',
    subtitle: 'Desmos-First Strategy',
    features: [
      'Desmos graphing calculator mastery from day one',
      'Digital SAT format, interface & timing strategy',
      'Algebra, advanced math, data analysis deep dives',
      'Weekly full-length practice test reviews',
      'Score-ceiling analysis — find your cap and break it',
    ],
    note: 'Taught by a student who scored 800 on SAT Math.',
  },
  {
    tag: 'English',
    title: 'Reading & Writing',
    subtitle: 'Evidence-Based Mastery',
    features: [
      'Reading comprehension — structure over summary',
      'Grammar & conventions by rule, not by feel',
      'Passage elimination & POE techniques',
      'Vocabulary in context — what College Board actually tests',
      'Full-section timing drills with error pattern review',
    ],
    note: 'Expert partner tutor with a strong Tri-Valley track record.',
  },
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
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">What we cover</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            Services.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative bg-surface border border-white/[0.08] p-10 hover:border-accent/40 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-600 pointer-events-none" />
              <div className="relative">
                <span className="inline-block font-dm text-[10px] tracking-[0.35em] uppercase text-accent border border-accent/30 px-3 py-1 mb-8 font-semibold">
                  {svc.tag}
                </span>
                <h3 className="font-syne font-black text-white text-3xl leading-tight mb-1.5">{svc.title}</h3>
                <p className="font-dm text-zinc-500 text-sm mb-8">{svc.subtitle}</p>

                <ul className="space-y-3 mb-9">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-dm text-zinc-400 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/[0.06] pt-5">
                  <p className="font-dm text-zinc-600 text-xs italic">{svc.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
