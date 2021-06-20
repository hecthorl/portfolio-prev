import { FaGithub } from 'react-icons/fa';

const Contact = () => {
   return (
      <>
         <section id="contact" className="contact-section">
            <h4 className="contact-title transition-[font-size]">
               Trabajemos Juntos!
            </h4>
            <span className="text-2xl md:text-3xl">
               Tienes un proyecto que te gustaría charlar?
            </span>
            <form
               onSubmit={e => e.preventDefault()}
               action=""
               className="form-contact"
            >
               <input placeholder="NOMBRE" type="text" className="input" />
               <input placeholder="EMAIL" type="text" className="input" />
               <textarea placeholder="COMO TE PUEDO AYUDAR?"></textarea>
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
