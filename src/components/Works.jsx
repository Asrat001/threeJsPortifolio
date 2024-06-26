import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import demo from "../assets/link.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

export  const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  return (
    <div  className="green-pink-gradient shadow-card p-[2px] h-fit w-fit rounded-[20px]" >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' bg-tertiary p-5 rounded-2xl h-auto sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px] '>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex flex-col space-y-2  justify-between  my-3 card-img_hover'>
            <a
               href={source_code_link} target="_blank"
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>
            <a
               href={link} target="_blank"
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
                  <img
                src={demo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
         
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <div id="projrct">
      <div >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <p
          
          className='mt-3 text-secondary text-[17px] w-[100px] p-1 rounded-2xl border-[2px]  border-indigo-600'
        >
          <Link>
          see More
          </Link>
        </p>

    </div>
  );
};

export default SectionWrapper(Works, "");
