import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
