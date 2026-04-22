import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Rithvik J.', detail: 'Junior · Emerald High School',
    quote: "The Desmos strategies alone saved me minutes per section — time I used to leave on the table. Going from a 1180 to a 1540 felt impossible before this.",
    badge: '1180 → 1540', stars: 5,
  },
  {
    name: 'Veerraju A.', detail: 'Parent · Dublin, CA',
    quote: "My son's attitude toward test prep completely flipped. He went from dreading sessions to talking about what he'd learned. The scores followed.",
    badge: null, stars: 5,
  },
  {
    name: 'Bhuvan K.', detail: 'Student · Tri-Valley',
    quote: "The custom plan targeted my actual weak spots instead of covering everything generically. Sessions were efficient and the progress was visible every single week.",
    badge: '1200 → 1530', stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-28 px-6 bg-card border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">Results</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            What they say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.11 }}
              className="group relative bg-surface border border-white/[0.08] p-8 hover:border-accent/40 transition-all duration-400 flex flex-col"
            >
              <div className="relative flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {t.badge && (
                  <span className="inline-block self-start font-dm text-[10px] tracking-[0.25em] uppercase text-accent border border-accent/30 px-3 py-1 mb-5 font-semibold">
                    {t.badge}
                  </span>
                )}

                <p className="font-dm text-zinc-400 text-sm leading-relaxed flex-1 mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-white/[0.06] pt-5">
                  <div className="font-syne font-semibold text-white text-sm">{t.name}</div>
                  <div className="font-dm text-zinc-600 text-xs mt-0.5">{t.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          className="font-dm text-zinc-700 text-xs mt-8 text-center"
        >
          Results shown are representative. Individual outcomes vary.
        </motion.p>
      </div>
    </section>
  );
}
