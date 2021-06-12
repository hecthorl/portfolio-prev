import { DiReact, DiCode, DiJavascript } from 'react-icons/di';
const ProjectCard = ({ title, desc, webSite, codeSource, img }) => {
   return (
      <figure className={`project-card ${img}`}>
         <div className="md:bg-black md:bg-opacity-50 w-full rounded-md h-[400px] flex justify-end items-end md:hover:bg-transparent md:hover:bg-opacity-0 md:transition-[bg] md:duration-300">
            <div className="text-2xl flex p-3 rounded-full backdrop-filter backdrop-blur-md space-x-4 absolute top-2 left-2 bg-black bg-opacity-60 text-white">
               <DiReact />
               <DiCode />
               <DiJavascript />
            </div>
            <div className="text-white backdrop-filter backdrop-blur-md p-2 rounded-md bg-black bg-opacity-60 h-[fit-content] max-w-[50%] space-y-7">
               <h3 className="text-3xl my-0 sm:mt-1">{title}</h3>
               <blockquote>
                  <p className="text-justify text-lg">{desc}</p>
               </blockquote>
               <div className="space-x-6">
                  <a className="btn-card" href={webSite} target="_blank">
                     Visitar
                  </a>
                  <a className="btn-card" href={codeSource} target="_blank">
                     Ver código
                  </a>
               </div>
            </div>
         </div>
      </figure>
   );
};

export default ProjectCard;
/**
 *             <ul className="space-y-1 mb-6">
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
 */
