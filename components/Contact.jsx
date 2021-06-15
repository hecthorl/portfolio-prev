import { FaGithub } from 'react-icons/fa';

const Contact = () => {
   return (
      <>
         <section id="contact" className="contact-section">
            <h4 className="transition-[font-size] duration-300 ease-in text-5xl md:text-6xl mt-8">
               Let's Work Together
            </h4>
            <span className="text-2xl md:text-3xl">
               Have a project you'd like to discuss?
            </span>
            <form
               onSubmit={e => e.preventDefault()}
               action=""
               className="form-contact"
            >
               <input placeholder="NOMBRE" type="text" className="input" />
               <input placeholder="EMAIL" type="text" className="input" />
               <textarea placeholder="HOW CAN I HELP YOU?"></textarea>
               <button className="btn-form">Submit</button>
            </form>
         </section>
         <footer className="footer-section">
            <time>©{new Date().getFullYear()} Hector.</time>
            <a href="https://github.com/hecthorl" target="_blank">
               <FaGithub className="inline text-2xl ml-2" />
            </a>
         </footer>
      </>
   );
};

export default Contact;
