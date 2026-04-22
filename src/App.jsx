import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheEdge from './components/TheEdge';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="bg-surface min-h-screen text-zinc-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TheEdge />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </main>
  );
}
