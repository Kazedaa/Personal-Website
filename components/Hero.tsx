import { FaLocationArrow, FaUniversity } from 'react-icons/fa'

import MagicButton from "./ui/Magibutton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 -left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Made with NextJs, Tailwind.css, ThreeJs and Framer
          </p>
          <TextGenerateEffect className = "text-center text-[40px] md:text-5xl lg:text-6xl" words = "Code. Create. Innovate. Shaping the future, one line at a time!"></TextGenerateEffect>

          <p className = "text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hey&#33;, I&apos;m <span className="text-purple ">Hemang J Jamadagni</span>, a Third Year Undergraduate @ <a href="https://www.nitk.ac.in/" >NITK <FaUniversity className = "inline-block mb-[5px]"/></a></p>


          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
