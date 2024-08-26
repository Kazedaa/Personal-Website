import React from 'react'
import { ExpandableCardDemo } from './ui/ExpandableCards'

const Experience = () => {
  return (
    <div className="py-20" id="experience">
        <h1 className="heading">
            My {' '}
            <span className="text-purple">Work Experience</span>
        </h1>
        <div className="flex w-full mt-12 mb-12 justify-center items-center">
            <ExpandableCardDemo />
        </div>
    </div>
  )
}

export default Experience