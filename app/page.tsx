import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Strip from '@/components/sections/Strip';
import Capabilities from '@/components/sections/Capabilities';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Strip />
      <Capabilities />
      <Contact />
    </main>
  );
}
