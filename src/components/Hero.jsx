import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const icoGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x42c2ff, wireframe: true, transparent: true, opacity: 0.5 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(2.6, 0, 0);
    scene.add(ico);

    const fillGeo = new THREE.IcosahedronGeometry(2.32, 1);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0x42c2ff, transparent: true, opacity: 0.04 });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.copy(ico.position);
    scene.add(fill);

    const PARTICLE_COUNT = 900;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x89d9ff, size: 0.044, transparent: true, opacity: 0.3, sizeAttenuation: true });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const onMouseMove = (e) => {
      targetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 1.4;
      targetRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 1.4;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.04;
      ico.rotation.x = t * 0.17 + mouseRef.current.y * 0.1;
      ico.rotation.y = t * 0.29 + mouseRef.current.x * 0.1;
      fill.rotation.copy(ico.rotation);
      const float = Math.sin(t * 0.55) * 0.2;
      ico.position.y = float;
      fill.position.y = float;
      particles.rotation.y = t * 0.016;
      particles.rotation.x = t * 0.008;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      [icoGeo, fillGeo, pGeo, icoMat, fillMat, pMat].forEach(o => o.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-surface via-surface/75 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 z-[1] pointer-events-none bg-gradient-to-t from-surface to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-20">
        <motion.p
          className="font-dm text-accent text-[11px] tracking-[0.4em] uppercase mb-8 font-semibold"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Dublin, CA · Tri-Valley SAT Prep
        </motion.p>

        <motion.h1
          className="font-syne font-black leading-[0.88] text-white mb-9"
          style={{ fontSize: 'clamp(3.4rem, 9vw, 8rem)' }}
          initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Score 1500+.<br />
          <span className="text-accent">Master the DSAT.</span>
        </motion.h1>

        <motion.p
          className="font-dm text-zinc-400 text-lg md:text-xl leading-relaxed max-w-[420px] mb-12"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          The Desmos advantage, perfected. Private SAT tutoring
          for Tri-Valley students who mean business.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#contact"
            className="group inline-flex items-center gap-3 bg-accent text-surface font-syne font-bold text-sm px-8 py-4 hover:bg-[#29B6F6] transition-colors duration-300">
            Book a Free Intro Call
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="#edge"
            className="inline-flex items-center border border-white/20 text-zinc-400 font-dm text-sm px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300">
            See The Edge
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-6 flex flex-col items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-14 bg-gradient-to-b from-accent/50 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
