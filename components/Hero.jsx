const Hero = () => {
   return (
      <section className="px-3 text-justify text-tercero">
         <div>
            <h1 className="text-4xl my-8 font-semibold font-alegreya">
               Hey, I'm Hector.
            </h1>
            <p className="text-2xl font-alegreya">
               Soy frontend developer, enfocado en el entorno de tecnologias con
               Javascript.
            </p>
            <button className="cta-btn">See projects</button>
            <picture>
               <img
                  src="/me.png"
                  alt="Picture of the author"
                  className="rounded-tl-2xl rounded-br-2xl h-img my-5 mx-auto shadow-img"
               />
            </picture>
         </div>
      </section>
   );
};

export default Hero;
