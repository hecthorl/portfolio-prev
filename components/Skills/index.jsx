import SkillCard from './SkillCard';
import StatLine from './StatLine';
const Skills = () => {
   return (
      <section id="skills" className="skills-section md:h-screen">
         <div className="skills-overview">
            <h4 className="skills-overview-title">Frontend Developer</h4>
            <blockquote className="skills-overview-quote">
               <p>
                  “Una máquina puede hacer el trabajo de cincuenta hombres
                  ordinarios, pero ninguna maquina puede hacer el trabajo de un
                  hombre extraordinario.”
               </p>
               <figcaption className="mt-4 text-lg">
                  <span>Elbert Hubbard - Escritor</span>
               </figcaption>
            </blockquote>
            <div className="skills-stats">
               <StatLine progress={60} area="HTLM & CSS" />
               <StatLine progress={40} area="JAVASCRIPT" />
               <StatLine progress={70} area="REACT" />
            </div>
         </div>
         <div className="skills-cards">
            <SkillCard icon="duo" desc="Nivel de ingles es B1" />
            <SkillCard icon="next" desc="Framework listo para producción" />
            <SkillCard icon="react" desc="La mejor libreria para Frontend" />
            <SkillCard icon="firebase" desc="Backend como servicio" />
         </div>
         <div></div>
      </section>
   );
};

export default Skills;
