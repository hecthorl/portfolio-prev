import { FaGithub } from 'react-icons/fa';

const Contact = () => {
   return (
      <>
         <section
            id="contact"
            className="contact-section sm:text-center"
            style={{ clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 8%)' }}
         >
            <h4 className="my-4 text-6xl">Let's Work Together</h4>
            <span className="text-3xl">
               Have a project you'd like to discuss?
            </span>
            <form
               onSubmit={e => e.preventDefault()}
               action=""
               className="form-contact sm:grid-cols-2 sm:place-items-center"
            >
               <div className="w-full">
                  <label className="text-2xl block tracking-widest mb-2">
                     NOMBRE
                  </label>
                  <input type="text" className="input" />
               </div>
               <div className="w-full">
                  <label className="text-2xl block tracking-widest mb-2 text-tercero">
                     EMAIL
                  </label>
                  <input type="text" className="input" />
               </div>
               <div className="sm:col-span-2 w-full">
                  <label className="text-2xl block tracking-widest mb-2 text-tercero">
                     HOW CAN I HELP YOU?
                  </label>
                  <textarea className="input h-52"></textarea>
               </div>
               <button className="btn-form sm:col-span-2 sm:max-w-[375px]">
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
