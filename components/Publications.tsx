import React from 'react'
import { publications } from '@/data'
import { PinContainer } from './ui/3DPin'


const Publications = () => {
  return (
    <div className="py-20" id="publications">
        <h1 className="heading">
            A look at my {' '}
            <span className="text-purple">Research Publications!</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {publications.map(({id,title,des,img,iconLists,link})=> (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title="Visit" href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidding h-[30vh] mb-10 sm:h-[40vh]">
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#1316ds]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt={title} className="z-10 absolute bottom-0" />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>

                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className = "flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon,index)=>(
                                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 h-8 flex justify-center items-center" style={{transform :`translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className="p-2 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Publications