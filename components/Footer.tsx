import React from 'react'
import MagicButton from './ui/Magibutton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full mb-100 md:mb-5 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w- full opacity-50 h-full"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Crafting code, creating impact.<span className='text-purple'> Thanks for visiting!</span>
        </h1>
        <p className="text-center mb-5 mt-3">Would love to collaborate. Feel Free to reach out.</p>
        <a href="mailto:hemangjamadagni@gmail.com">
          <MagicButton 
          title="Let's get in touch!"
          icon={<FaLocationArrow className="m-2"/>}
          position="right"
          otherClasses='mb-5'
          />
        </a>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-1">
        <p className="md:text-base text-sm md:font-normal font-light items-center justify-center">
          Copyright © 2024 By Hemang J Jamadagni</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile)=>
          <div key={profile.id} className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a target = "_blank"href={profile.link}>
            <img
            src={profile.img}
            width={20} height={20} /> </a>
          </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer