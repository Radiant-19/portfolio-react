import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${s}px)`;

const calc = (x, y) => {
  const BUFFER = 50;

  const why = (y - window.innerHeight / 2) / BUFFER;
  const ex = (x - window.innerWidth / 2) / BUFFER;

  console.log("why", why);
  console.log("y", y);
  return [y / 50, x / 50, 1.1];
};

const Projects = () => {
  const imageCount = 5;
  const springConfig = { mass: 5, tension: 350, friction: 40 };
  const imageProps = Array.from({ length: imageCount }, () => {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: springConfig,
    }));
    return { props, set };
  });

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
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" } },
  };

  // Define an array of links corresponding to each image
  const imageLinks = [
    "https://github.com/Radiant-19/Hospital-Management-System",
    "https://github.com/Radiant-19/Admission_interface_system",
    "https://github.com/Radiant-19/Online-Professional-chatting-systems",
    "https://github.com/Radiant-19/Quantum-Genetic-algorithm",
    "https://github.com/Radiant-19/ICOPE-screening-tool",
    
    "/",
  ];

  return (
    <div id="projects" className="w-11/12 md:w-10/12 mx-auto mt-32 mb-40">
      <div className="text-center mb-20">
        <span className="border-b-2 text-4xl blue-text-gradient rounded-sm bg-gradient-to-r from-black to to-blue-300">
          Projects
        </span>
        <div className="mt-5 text-xl text-neutral-200">
          My Work and Projects
        </div>
      </div>
      <div className="w-11/12 md:w-11/12 mx-auto">
        <motion.div
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="show"
          className="grid mx-auto gap-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
        >
          {imageProps.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full h-[250px] relative"
            >
              <a
                href={imageLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <animated.img
                  onMouseMove={(e) => {
                    const { clientX: x, clientY: y } = e;
                    return image.set({ xys: calc(x, y) });
                  }}
                  onMouseLeave={() => image.set({ xys: [0, 0, 1] })}
                  style={{ transform: image.props.xys.to(trans) }}
                  className='object-cover object-left-top w-full h-full absolute'
                  src={`/project${index + 1}.png`}
                  alt=''
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
