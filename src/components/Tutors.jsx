import { motion } from 'framer-motion';

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
            Meet the founder.
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
            className="group flex flex-col border border-white/[0.08] bg-card hover:border-accent/40 transition-all duration-400 w-full max-w-sm"
          >
            {/* Square image */}
            <div className="relative w-full aspect-square bg-surface overflow-hidden">
              <img
                src="/hrihaan.jpg"
                alt="Hrihaan B."
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 5%', transform: 'scale(1.2)' }}
              />
            </div>

            {/* Info */}
            <div className="p-7 flex flex-col">
              <div className="mb-4">
                <h3 className="font-syne font-black text-white text-xl mb-1">Hrihaan B.</h3>
                <p className="font-dm text-[11px] tracking-[0.25em] uppercase font-semibold text-accent">Founder · SAT Math · Desmos Specialist</p>
              </div>
              <p className="font-dm text-zinc-400 text-sm leading-relaxed">
                Hi! I'm Hrihaan. I scored a perfect 800 on SAT Math with a 1560 overall. I specialize in Desmos strategy for the digital SAT — turning the graphing calculator into a scoring weapon. I am a junior at Emerald High School, Dublin, CA.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
