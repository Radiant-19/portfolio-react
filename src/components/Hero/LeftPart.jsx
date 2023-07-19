import React from "react";
import { motion } from "framer-motion";

const LeftPart = () => {
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
    hidden: { opacity: 0, x:30 },
    show: { opacity: 1, x:0, transition:{type: 'spring'} },
  };
  return (
    <div className="relative md:mt-0 mt-16">
      <motion.div
        className="space-y-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-transparent text-2xl italic bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Hello
        </motion.p>
        <motion.h1 className="xl:text-5xl md:text-3xl text-3xl" variants={item}>
          I'm <span className="blue-text-gradient">Arvind Manavalan</span>{" "}
        </motion.h1>
        <motion.h1 className="xl:text-3xl md:text-3xl text-3xl" variants={item}>
        Aspiring Full Stack <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-800 to-blue-300">Developer</span> | Fresh Graduate{" "}
        </motion.h1>
       
      </motion.div>
    
      <motion.div className="">
        
      </motion.div>
      <motion.p initial={{opacity:0}} animate={{ opacity: 1 }} transition={{delay:1}} className="text-[12px] italic my-5 w-80 text-purple-300 ">"“A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.”

" - Alan Turing</motion.p>
      <div className="scroll-down relative hidden ">
        <p className="-rotate-90 absolute -bottom-24 -right-8 text-slate-300">
          Scroll Down
        </p>
        <div className="absolute top-36 opacity-60 right-0 w-7 h-14 border-solid border-2 border-gray-500 rounded-2xl flex items-center justify-center">
          <a href="#about">
            <motion.div
              className="w-3 h-3 bg-gradient-to-t from-[#fc6767] to-[#ec008c] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
