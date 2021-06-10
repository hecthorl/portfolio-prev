const Hero = () => {
   return (
      <section className="hero-section">
         <div>
            <h1 className="md:text-7xl text-4xl my-8 font-semibold font-alegreya">
               Hey, I'm Hector.
            </h1>
            <p className="md:text-4xl text-2xl font-alegreya">
               Soy frontend developer, enfocado en el entorno de tecnologias con
               Javascript.
            </p>
            <button className="cta-btn">See projects</button>
         </div>
         <figure className="px-3 md:px-0">
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
