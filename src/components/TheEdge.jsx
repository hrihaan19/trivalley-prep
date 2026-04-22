import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ to, duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p >= 1) clearInterval(tick);
    }, 16);
    return () => clearInterval(tick);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}</span>;
}

const STATS = [
  {
    display: 'number', value: 800,
    label: 'SAT Math Score',
    desc: "Every strategy here is battle-tested from a perfect score. You're being coached by someone who's already solved the puzzle.",
  },
  {
    display: 'text', value: 'Desmos', sub: 'Specialist',
    label: 'Calculator Mastery',
    desc: 'Most students leave Desmos untouched. We weaponize it — cutting solve time in half. This is the digital SAT edge nobody talks about.',
  },
  {
    display: 'text', value: '1:1',
    label: 'Private Sessions Only',
    desc: "No group classes. No worksheets. Every session adapts in real time to where you're stuck and what you're almost there on.",
  },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative bg-card border border-white/[0.08] p-10 hover:border-accent/50 transition-all duration-400 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-600 pointer-events-none" />
      <div className="relative">
        <div className="font-syne font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)' }}>
          {stat.display === 'number' ? <CountUp to={stat.value} /> : stat.value}
        </div>
        {stat.sub && <div className="font-syne text-zinc-600 text-xl mb-2">{stat.sub}</div>}
        <div className="font-syne font-semibold text-zinc-300 text-base mb-5">{stat.label}</div>
        <div className="w-6 h-px bg-accent/40 mb-5" />
        <p className="font-dm text-zinc-500 text-sm leading-relaxed">{stat.desc}</p>
      </div>
    </motion.div>
  );
}

export default function TheEdge() {
  return (
    <section id="edge" className="relative z-10 py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">Why it works</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            The Edge.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STATS.map((s, i) => <StatCard key={i} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
