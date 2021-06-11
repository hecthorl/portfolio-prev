const Hero = () => {
   return (
      <section className="hero-section">
         <div>
            <h1 className="hero-title">Hey, I'm Hector.</h1>
            <p className="hero-text">
               Soy frontend developer, enfocado en el entorno de tecnologias con
               Javascript.
            </p>
            <button className="hero-btn">See projects ↓</button>
         </div>
         <figure>
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
