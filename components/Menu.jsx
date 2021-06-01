import Li from './Li';

const Menu = ({ className }) => {
   return (
      <ul className={className}>
         <Li content="Inicio" />
         <Li content="About me" />
         <Li content="Skills" />
         <Li content="Proyectos" href="#proyects" />
         <Li content="Contacto" href="#contact" />
      </ul>
   );
};
export default Menu;
