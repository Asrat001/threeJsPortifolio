import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Showcase } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
      
          <Navbar />
          <Hero />
       <div className=" md:mt-20">
        <Showcase/>
       <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
       </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
