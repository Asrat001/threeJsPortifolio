
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel"
  import { projects } from "@/constants";
 import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { HiLink } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



const Showcase = () => {
  return (
    <section>
   <div className={` sm:mt-20  p-5 md:p-0`}>
      <p className={ `${styles.sectionSubText} text-center `}>What I have built so far.</p>
        <h2 className={ `${styles.sectionHeadText} text-center`}>Check out my Works</h2>
      
  <div className=" flex items-center gap-4 my-2">
      <p>
      <BsArrowLeft size={25}/>
      </p>
     <p>
      <BsArrowRight size={25}/>
     </p>
  </div>

  <Carousel   className=" mt-2   flex items-center justify-center">
  <CarouselContent className=" ">
   {
    projects.map((project, index)=>(
      <CarouselItem className=" md:basis-1/2  lg:basis-1/3">
        <img src={project.image} className=" w-full h-[400px] object-cover rounded-sm"/>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[28px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px] '>{project.description}</p>
        </div>
        <div className="flex items-center gap-8 mt-5">
            <a href={project.source_code_link} target="_blank" className="flex blue-text-gradient gap-3 items-center">
                GitHub <HiLink/>
            </a>
            <a href={project.link} target="_blank" className="flex gap-3 items-center green-text-gradient">
                Demo <HiLink/>
            </a>

        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

   

      </CarouselItem>
    
    ))

    
   }

  </CarouselContent>
 
  <CarouselPrevious className=" bg-black text-white hidden md:block" />
  <CarouselNext className=" bg-black text-white hidden md:block"  />
</Carousel>
     <div className="mt-16 flex justify-center items-center">
    <p className=" text-[20px] text-pink-800">
    {`swap to see the ${projects.length} Projects`
        }
    </p>
        </div>
    </div>
   
    </section>
  )
}

export default SectionWrapper(Showcase,"show")