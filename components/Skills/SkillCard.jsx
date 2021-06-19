import { SiDuolingo, SiReact, SiFirebase, SiNextDotJs } from 'react-icons/si';
const ICONS = {
   duo: <SiDuolingo />,
   react: <SiReact />,
   firebase: <SiFirebase />,
   next: <SiNextDotJs />,
};
const SkillCard = ({ icon, desc }) => {
   const IconComponent = ICONS[icon];
   return (
      <figure className="skills-card-container">
         <div className="skills-card-icon">{IconComponent}</div>
         <blockquote className="text-lg">{desc}</blockquote>
      </figure>
   );
};

export default SkillCard;
