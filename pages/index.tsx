import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work_Experience from '@/components/Work_Experience';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"> {/* Change the Colour in the Future*/}
      <Head>
        <title>Sourish Das</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="experience" className="snap-center">
        <Work_Experience />
      </section>


      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      
    </div>
  );
};
