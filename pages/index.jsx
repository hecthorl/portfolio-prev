import Head from 'next/head';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

export default function Home() {
   return (
      <>
         <Head>
            <title>Hector</title>
            <meta name="description" content="Hector's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <hr className="w-11/12 ml-3 my-1" />
         <Hero />
         <Projects />
         <Contact />
      </>
   );
}
