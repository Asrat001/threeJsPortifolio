import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { styles } from "../styles";
import { FaPhoneAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto p-2 md:p-14`}>
      <div
        className={`flex justify-start mt-20 sm:mt-14 items-center h-full   max-w-2xl  ${styles.paddingX} `}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center md:text-start`}>
          Grow Your Business Online with 
     <span className='text-[#915EFF]'> Expert Web Development</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#915EFF] text-center md:text-justify`}>
          from Planning and Designing  <br className='sm:block hidden' />
          </p>
      
          <p className=" text-gray-400 text-center sm:text-justify">
          We’ll collaborate to identify your target audience, website features, and functionality to meet your needs.
          Once the design is approved, I will begin building your website using the appropriate programming languages and platforms
          </p>
          <p>Let's Bring Your Idea to life , Contact Me !</p>
          <div className="flex flex-col md:flex-row items-center justify-start mt-4 gap-6">
            <a href="tel:+251916562124" target="_blank" className=" w-[200px] p-3 rounded-lg border-[2px] border-[#915EFF] flex justify-center items-center gap-2">
            <FaPhoneAlt/>
            +251916562124
            </a>
            <a href="https://www.linkedin.com/in/asrat-adane-50a521240" target="_blank" className=" w-[200px] p-3 rounded-lg border-[2px] border-[#915EFF] flex justify-center items-center gap-2">
            <BsLinkedin />
             Linkedin
            </a>
            <a href="https://github.com/Asrat001" target="_blank" className=" w-[200px] p-3 rounded-lg border-[2px] border-[#915EFF] flex justify-center items-center gap-2">
            <FaGithub />
             Github
            </a>
          </div>
        </div>

        <div>
         
       
        </div>
      </div>

   
   
    

    </section>
  );
};

export default Hero;
