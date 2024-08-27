'use client'
import React from 'react'
import { useState } from "react";
import MagicButton from './ui/Magibutton';
import { FaFilePdf } from 'react-icons/fa';


const Resume = () => {

  const [open, setopen] = useState(false)

  const showResume = () => {
    if(open)setopen(false);
    else setopen(true);
  }

  return (
    <div className="flex flex-col w-full h-full mt-12 mb-[96px] justify-center items-center">
      <h1 className = "heading text-purple mb-12">My Résumé</h1>
      <embed className={`${open? "": "hidden"} w-[1000px] h-[1150px] rounded-3xl overflow-hidden"`} src = "/FinalResume.pdf" />
      <MagicButton 
      title = {`${open?"Close":"Open"} Résumé `}
      icon = { <FaFilePdf className="m-2"/>}
      position="right"
      handleClick={showResume}
      otherClasses= "mt-10"
      />
    </div>
  );
}
export default Resume