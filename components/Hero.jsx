const Hero = () => {
   return (
      <section className="hero-section">
         <div>
            <h1 className="hero-title">
               Hey,
               <span className="hero-name">I'm Hector.</span>
            </h1>
            <p className="hero-text">
               Soy frontend developer, enfocado en el entorno de tecnologías con
               JavaScript.
            </p>
            <button className="hero-btn">See projects ↓</button>
         </div>
         <figure className="md:pr-2">
            <img
               src="/me.png"
               alt="Picture of the author"
               className="img-hero"
            />
         </figure>
      </section>
   );
};

export default Hero;
