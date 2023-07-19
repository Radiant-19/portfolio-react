import React from 'react'
import {BsSearch} from "react-icons/bs"
import {GiTechnoHeart} from "react-icons/gi"
import {FaPeopleCarry} from "react-icons/fa"
import {AiTwotoneAlert} from "react-icons/ai"
import {DiCode} from "react-icons/di"
import {DiCodeigniter} from "react-icons/di"
import {SiGoogleoptimize} from "react-icons/si"

import Spots from './spots'
import {motion} from "framer-motion"

const Text = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, x:30,  },
        show: { opacity: 1, x:0, transition:{type: 'spring'} },
    };
  return (
    <motion.div variants={container} viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="show" className='text'>
        <motion.div variants={item} className='bg-gradient-to-r from-[#100009] to-[#043143] inline-block mb-6 rounded-md'>
          <p className='p-1'>More about me</p>
        </motion.div>
        <motion.h1 variants={item} className='text-3xl font-medium leading-10 mb-5'>Ready to explore beyond <br className='lg:block hidden' /> <span className='blue-text-gradient'>Boundaries</span></motion.h1>
        <motion.p variants={item} className='text-sm text-neutral-400'>As a proficient full-stack developer and possess knowledge of great optimizing algorithms, I possess an insatiable curiosity for delving into the intricacies of machine learning and a deep passion for exploring the fascinating realm of quantum computing.</motion.p>
        <motion.div variants={item} className='grid grid-cols-2 gap-5 mt-10'>
          <div className='grid grid-cols-1 gap-2'>
            <div className="icon">
              <SiGoogleoptimize size={24} className='text-blue-500'/>
            </div>
            <div>
              <h1>Optimizing</h1>
              <p className='text-[10px] text-neutral-400'>With knowledge about opitmizing algorithms such as grey-wolf,genetic algorithms & etc I could provide efficent programs</p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-2 '>
            <div className="icon">
              <DiCode size={24} className='text-blue-500'/>
            </div>
            <div>
              <h1>Developing</h1>
              <p className='text-[10px] text-neutral-400'>With great idea about Various frameworks and programming languages I could develop highly interactive applications</p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-2 '>
            <div className="icon">
              <DiCodeigniter size={24} className='text-blue-500'/>
            </div>
            <div>
              <h1>Testing</h1>
              <p className='text-[10px] text-neutral-400'>With knowledge about various Testing techniques like white-box,black-box &etc I would be very efficient in Testing algorithms and applications </p>
            </div>
          </div>
         
          <div className='grid grid-cols-1 gap-2'>
            <div className="icon">
              <AiTwotoneAlert size={24} className='text-blue-500'/>
            </div>
            <div>
              <h1>Security& deployment</h1>
              <p className='text-[10px] text-neutral-400'>With knowledge google oauth services and APIS/passportjs I am capable of implementing advanced features and hosting applications</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
  )
}

export default Text