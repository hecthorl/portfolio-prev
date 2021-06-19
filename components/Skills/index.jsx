import SkillCard from './SkillCard';
import StatLine from './StatLine';
const Skills = () => {
   return (
      <section id="skills" className="skills-section">
         <div className="skills-overview">
            <h4 className="skills-overview-title">As a Frontend Developer</h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
               dignissimos quo ipsa harum ex in id.
            </p>
            <div className="skills-stats">
               <StatLine progress={60} area="HTLM & CSS" />
               <StatLine progress={40} area="JavaScript" />
               <StatLine progress={70} area="React" />
            </div>
         </div>
         <div className="skills-cards">
            <SkillCard icon="duo" desc="Nivel de ingles es B1" />
            <SkillCard icon="next" desc="Framework listo para producción" />
            <SkillCard icon="react" desc="La mejor libreria para Frontend" />
            <SkillCard icon="firebase" desc="Listo para usar" />
         </div>
      </section>
   );
};

export default Skills;
