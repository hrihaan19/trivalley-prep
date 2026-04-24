import { motion } from 'framer-motion';

const PACKAGES = [
  { name: 'Starter', sessions: 4, price: 240, originalPrice: 340, savings: null },
  { name: 'Core', sessions: 8, price: 440, originalPrice: 680, savings: 80 },
  { name: 'Elite', sessions: 12, price: 750, originalPrice: 1020, savings: 270 },
];

const SUBJECTS = [
  {
    tag: 'Math',
    title: 'Digital SAT Math',
    subtitle: 'Desmos-First Strategy',
    features: [
      'Desmos graphing calculator mastery from day one',
      'Digital SAT format, interface & timing strategy',
      'Algebra, advanced math, and data analysis deep dives',
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
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">What we offer</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            Services.
          </h2>
        </motion.div>

        {/* Subject cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
          {SUBJECTS.map((svc, i) => (
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

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-3 font-semibold">Pricing</p>
              <h3 className="font-syne font-black text-white text-4xl">Simple, flat rate.</h3>
              <p className="font-dm text-red-500 text-sm tracking-widest uppercase mt-2 font-bold">LIMITED TIME OFFER</p>
            </div>
            <div className="font-dm text-sm flex flex-col items-start sm:items-end gap-1">
              <span className="text-red-500 line-through text-xl font-semibold">$85 / hr</span>
              <span>
                <span className="text-white font-semibold text-2xl">$65</span>
                <span className="text-zinc-600"> / hr</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative bg-surface border p-8 flex flex-col overflow-hidden transition-all duration-400 ${
                  pkg.name === 'Elite'
                    ? 'border-accent/40'
                    : 'border-white/[0.08] hover:border-accent/30'
                }`}
              >
                {pkg.name === 'Elite' && (
                  <span className="absolute top-0 right-0 font-dm text-[9px] tracking-[0.3em] uppercase bg-accent text-surface px-3 py-1 font-semibold">
                    Best Value
                  </span>
                )}
                <div className="mb-6">
                  <p className="font-syne font-black text-white text-2xl mb-1">{pkg.name}</p>
                  <p className="font-dm text-zinc-500 text-sm">{pkg.sessions} sessions &nbsp;·&nbsp; {pkg.sessions} hours</p>
                </div>
                <div className="mb-6">
                  <div className="font-dm text-red-500 line-through text-2xl font-semibold mb-1">${pkg.originalPrice}</div>
                  <span className="font-syne font-black text-white text-5xl">${pkg.price}</span>
                </div>
                <div className="border-t border-white/[0.06] pt-5 mt-auto">
                  {pkg.savings ? (
                    <p className="font-dm text-accent text-sm font-semibold">Save ${pkg.savings} vs. pay-per-session</p>
                  ) : (
                    <p className="font-dm text-zinc-600 text-sm">Pay-per-session rate</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
