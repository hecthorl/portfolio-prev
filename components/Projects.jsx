import ProjectArticle from './ProjectArticle';

const Projects = () => {
   return (
      <section className="px-5 pb-6">
         <h2 id="proyects" className="text-primero text-2xl font-semibold">
            Proyectos
         </h2>
         <hr className="mt-1" />
         <ProjectArticle
            title="Devtter"
            desc="Un clon de tweeter para desarrolladores, construido con NextJS y firebase."
            codeSource="https://github.com/hecthorl/devtter"
            webSite="https://devtter-ten.vercel.app/home"
            img="/devter.png"
         />
         <ProjectArticle
            title="Bebebidas"
            desc="Una app para encontrar recetas de bebidas. Conectadas desde una api con ReactJS."
            codeSource="https://github.com/hecthorl/bebebidas"
            webSite="https://bebebidas.vercel.app/"
            img="/bebebidas.png"
         />
         <ProjectArticle
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
