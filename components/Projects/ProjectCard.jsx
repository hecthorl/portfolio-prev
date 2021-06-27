import { DiReact, DiCode, DiJavascript } from 'react-icons/di';
const ProjectCard = ({ title, desc, webSite, codeSource, img }) => {
   return (
      <figure className={`project-card ${img}`}>
         <div className="project-card-container group">
            <div className="project-card-icons">
               <DiReact />
               <DiCode />
               <DiJavascript />
            </div>
            <div className="project-card-content">
               <h3 className="text-4xl tracking-wider my-0 sm:mt-1">{title}</h3>
               <blockquote>
                  <p className="text-justify text-lg">{desc}</p>
               </blockquote>
               <div className="space-x-6">
                  <a
                     className="btn-card"
                     rel="noopener noreferrer"
                     href={webSite}
                     target="_blank"
                  >
                     Visitar
                  </a>
                  <a
                     className="btn-card"
                     rel="noopener noreferrer"
                     href={codeSource}
                     target="_blank"
                  >
                     Ver código
                  </a>
               </div>
            </div>
         </div>
      </figure>
   );
};

export default ProjectCard;
