import { HiCode, HiOutlineTerminal } from 'react-icons/hi';
import { FaPenNib } from 'react-icons/fa';
const ProjectCard = ({ title, desc, webSite, codeSource, img }) => {
   return (
      <figure className="project-card">
         <img className="rounded-lg" src={img} alt="devter" />
         <div className="text-tercero">
            <h3 className="text-3xl my-4 sm:mt-0">{title}</h3>
            <blockquote>
               <p className="text-justify text-lg mb-4">{desc}</p>
            </blockquote>
            <ul className="space-y-4 mb-6">
               <li>
                  <HiOutlineTerminal className="inline mr-3 text-2xl" />
                  DINAMIC WEB SITE DEVELOPMENT
               </li>
               <li>
                  <FaPenNib className="inline mr-3 text-2xl" /> WEB DESING
               </li>
               <li>
                  <HiCode className="inline mr-3 text-2xl" />
                  STATIC SITE DEVELOPMENT
               </li>
            </ul>
            <div className="space-x-2">
               <a className="btn-card" href={webSite} target="_blank">
                  Visitar
               </a>
               <a className="btn-card " href={codeSource} target="_blank">
                  Ver código
               </a>
            </div>
         </div>
      </figure>
   );
};

export default ProjectCard;