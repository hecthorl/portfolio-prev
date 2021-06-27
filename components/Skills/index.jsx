import SkillCard from './SkillCard';
import StatLine from './StatLine';
const Skills = () => {
   return (
      <section id="skills" className="skills-section md:h-screen">
         <div className="skills-overview">
            <h4 className="skills-overview-title">Sobre mí</h4>
            <p className="skills-overview-quote">
               Desarrollador de software para la web, enfocado en el entorno de
               tecnologías con JavaScript. Si quieres conocer mi Github
               <a
                  className="hover:underline hover:text-blue-500 ml-1 text-yellow-600"
                  target="_blank"
                  href="https://github.com/hecthorl"
                  rel="noopener noreferrer"
               >
                  aqui.
               </a>
            </p>
            <div className="skills-stats">
               <StatLine progress={60} area="HTLM & CSS" />
               <StatLine progress={40} area="JAVASCRIPT" />
               <StatLine progress={70} area="REACT JS" />
            </div>
         </div>
         <div className="skills-cards">
            <SkillCard icon="duo" desc="Nivel de inglés B1" />
            <SkillCard icon="next" desc="Framework listo para producción" />
            <SkillCard icon="react" desc="La mejor librería para Frontend" />
            <SkillCard icon="firebase" desc="Backend como servicio" />
         </div>
         <div></div>
      </section>
   );
};

export default Skills;
