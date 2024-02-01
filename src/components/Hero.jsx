import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { styles } from "../styles";
import { FaPhoneAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`flex justify-center items-center h-full  max-w-2xl mx-auto ${styles.paddingX} `}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm  <span className='text-[#915EFF]'>Asrat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>
            Full stack Software Developer    <br className='sm:block hidden' />
          </p>
      
          <p className=" text-gray-400">
          I'm an advocate for building responsive, accessible and inclusive digital products and experiences for the web and mobile based in Addis Ababa, Ethiopia
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
      </div>

   
   
    
      <div className="absolute xs:bottom-10 bottom-32  w-full  flex justify-center items-center">
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
          </div>

    </section>
  );
};

export default Hero;
