import { FaGithub } from 'react-icons/fa';

const Contact = () => {
   return (
      <>
         <section
            id="contact"
            className="px-3 pb-4 pt-8 mt-4 bg-quinto font-alegreya text-tercero"
            style={{ clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 12%)' }}
         >
            <h4 className="my-4 text-4xl">Let's Work Together</h4>
            <span className="text-xl">
               Have a project you'd like to discuss?
            </span>
            <form
               onSubmit={e => e.preventDefault()}
               action=""
               className="flex flex-col mt-4 space-y-3 w-full"
            >
               <div>
                  <label className="block">NOMBRE</label>
                  <input
                     type="text"
                     className="text-lg text-primero w-full border-2 border-tercero rounded-md py-1 px-2"
                  />
               </div>
               <div>
                  <label className="block text-tercero">EMAIL</label>
                  <input
                     type="text"
                     className="text-lg text-primero w-full border-2 border-tercero rounded-md py-1 px-2"
                  />
               </div>
               <div>
                  <label className="block text-tercero">
                     HOW CAN I HELP YOU?
                  </label>
                  <textarea className="text-lg text-primero py-1 px-2 w-full border-2 border-tercero rounded-md"></textarea>
               </div>
               <button className="px-2 bg-primero border-2 border-tercero rounded-md py-1 text-tercero text-xl focus:outline-none">
                  Submit
               </button>
            </form>
         </section>
         <footer className="text-center bg-primero text-gray-500 py-3">
            <time className="inline">©{new Date().getFullYear()} Hector.</time>
            <p className="inline">
               <a href="https://github.com/hecthorl" target="_blank">
                  <FaGithub className="inline text-2xl ml-2" />
               </a>
            </p>
         </footer>
      </>
   );
};

export default Contact;
