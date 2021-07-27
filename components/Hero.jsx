import Image from 'next/image';
import me from 'public/me.jpg';

const Hero = () => {
   return (
      <section className="hero-section">
         <div>
            <h1 className="hero-title">
               Hey,
               <span
                  before=" "
                  className="hero-name before:content-[attr(before)]"
               >
                  Soy Hector
               </span>
            </h1>
            <p className="hero-text">Frontend developer</p>
            <a href="#proyects" className="hero-btn">
               See projects ↓
            </a>
         </div>
         <figure className="md:pr-2 text-center">
            <Image
               alt="Hector Vargas"
               src={me}
               placeholder="blur"
               width={316}
               height={425}
               className="rounded-full"
            />
         </figure>
      </section>
   );
};

export default Hero;
