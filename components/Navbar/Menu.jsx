import Li from '../Li';

const Menu = ({ className }) => {
   return (
      <ul className={className}>
         <Li content="About me" className="denied" />
         <Li content="Skills" className="denied" />
         <Li
            content="Proyectos"
            href="#proyects"
            className="md:hover:opacity-60 transition-opacity duration-300"
         />
         <Li
            content="Contacto"
            href="#contact"
            className="md:hover:opacity-60 transition-opacity duration-300"
         />
      </ul>
   );
};
export default Menu;
