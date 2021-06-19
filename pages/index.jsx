import Head from 'next/head';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact';
import Skills from 'components/Skills';

export default function Home() {
   return (
      <>
         <Head>
            <title>Hector</title>
            <meta
               name="description"
               content="Hector's Portfolio, Soy frontend developer, enfocado en el entorno de tecnologias con Javascript."
            />
            <link
               rel="preload"
               href="/fonts/AlegreyaSans-Regular.ttf"
               as="font"
               crossOrigin="anonymous"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <Hero />
         <Skills />
         <Projects />
         <Contact />
      </>
   );
}
