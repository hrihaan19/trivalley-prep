import { motion } from 'framer-motion';

const TUTORS = [
  {
    name: 'Hrihaan B.',
    role: 'SAT Math · Desmos Specialist',
    bio: 'Hi! Im Hrihaan, a rising Senior at Emerald High. I scored a perfect 800 on SAT Math with a 1560 overall, and I also teach Integrated Math — specializing in Desmos strategy and the kind of problem-solving patterns that show up in both SAT and IM coursework.',
    image: '/hrihaan.jpg',
    objectPosition: 'center 5%',
    scale: 1.2,
  },
  {
    name: 'Utkarsh V.',
    role: 'Reading & Writing',
    bio: 'Hi! My name is Utkarsh, a rising Senior at Emerald High. I scored a 1540 on the SAT and specialize in Reading & Writing — evidence-based comprehension, grammar by rule, and vocab in context. I also help students build the reading and reasoning skills that carry over into all their classes.',
    image: '/utkarsh.jpg',
  },
  {
    name: 'Atharva Y.',
    role: 'SAT Math & English',
    bio: 'Hey Tri-Valley! I\'m Atharva, a rising Senior at Dublin High. I scored a 1550 on the SAT and teach both SAT Math & English and Integrated Math. I bring deep subject knowledge and a personalized approach — committed to helping every student close the gap between where they are and where they need to be.',
    image: '/atharva.jpg',
    rotate: 90,
  },
  {
    name: 'Rishi N.',
    role: 'SAT Math & English',
    bio: 'Hey! My name is Rishi and I am a rising Senior at Emerald High. I love teaching both Math and English for the SAT. I achieved a 1540 on the SAT myself, and have helped several of my friends gain higher SAT scores, ranging from 50-250 points!',
    image: '/rishi.jpg',
    objectPosition: 'center 15%',
  },
];

export default function Tutors() {
  return (
    <section id="tutors" className="relative z-10 py-28 px-6 bg-surface border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-dm text-zinc-500 text-[11px] tracking-[0.4em] uppercase mb-4 font-semibold">Who teaches you</p>
          <h2 className="font-syne font-black text-white leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            The tutors.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TUTORS.map((tutor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group flex flex-col border border-white/[0.08] bg-card hover:border-accent/40 transition-all duration-400"
            >
              {/* Square image */}
              <div className="relative w-full aspect-square bg-surface overflow-hidden">
                {tutor.image ? (
                  <img src={tutor.image} alt={tutor.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: tutor.objectPosition || 'center top', transform: [tutor.rotate ? `rotate(${tutor.rotate}deg)` : '', tutor.scale ? `scale(${tutor.scale})` : ''].filter(Boolean).join(' ') || undefined }} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full border border-accent/30 flex items-center justify-center">
                      <span className="font-syne font-black text-2xl text-accent">{tutor.initials}</span>
                    </div>
                    <p className="font-dm text-zinc-700 text-xs tracking-widest uppercase">Photo</p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-7 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-syne font-black text-white text-xl mb-1">{tutor.name}</h3>
                  <p className="font-dm text-[11px] tracking-[0.25em] uppercase font-semibold text-accent">{tutor.role}</p>
                </div>
                <p className="font-dm text-zinc-400 text-sm leading-relaxed">{tutor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
