import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';

import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import WorkExperience from '@/components/work_experience/WorkExperience';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(25,25,25)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      <section id="experience" className="snap-start">
        <Experience />
      </section>

      <section className='snap-start'>
        <WorkExperience />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>



      {/* Contact Me */}
      
    </div>
  );
};
