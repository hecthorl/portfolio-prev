import ProjectCard from './ProjectCard';

const Projects = () => {
   return (
      <section className="px-5 pb-6">
         <div className="title-sp">
            <h2 id="proyects" className="text-primero pb-1 font-semibold">
               Proyectos Destacados
            </h2>
            <hr className="border border-tercero" />
         </div>
         <ProjectCard
            title="Devtter"
            desc="Un clon de tweeter para desarrolladores, construido con NextJS y firebase."
            codeSource="https://github.com/hecthorl/devtter"
            webSite="https://devtter-ten.vercel.app/home"
            img="/devter.png"
         />
         <ProjectCard
            title="Bebebidas"
            desc="Una app para encontrar recetas de bebidas. Conectadas desde una api con ReactJS."
            codeSource="https://github.com/hecthorl/bebebidas"
            webSite="https://bebebidas.vercel.app/"
            img="/bebebidas.png"
         />
         <ProjectCard
            title="Journal App"
            desc="Una daily-app, como diario digital, construido con React y firebase"
            codeSource="https://github.com/hecthorl/react-journal-app"
            webSite="https://react-journal-app-kappa.vercel.app/"
            img="/journal-app-2.png"
         />
      </section>
   );
};

export default Projects;
