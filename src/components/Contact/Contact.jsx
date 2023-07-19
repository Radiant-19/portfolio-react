import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xr8qj9v', 'template_mqxsb0r', form.current, 'cnimR6C8693rk0jI4')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        }).catch(err => console.log(err))
        ;
    };


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
        hidden: { opacity: 0, x:100,  },
        show: { opacity: 1, x:0, transition:{type: 'spring'} },
    };
  return (
    <div className="mb-20" id="contact" >
      <div className="md:w-10/12 w-11/12 mx-auto ">
        <div className="blue-text-gradient inline-block mb-12">
          <h2 className="text-4xl p-2 px-1">Contact Me</h2>
        </div>
        <div className="md:w-8/12 w-full mx-auto">
            <motion.h1 initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                     className=" text-2xl text-white mb-5">
            Get in Touch &#128075;
            </motion.h1>
            <p className='text-xl text-neutral-200 mb-5'>My Email: <span className='italic text-sm text-neutral-400'>2002manavalan@gmail.com</span></p>
          <motion.form ref={form} onSubmit={sendEmail} variants={container} viewport={{ once: true, amount: 0.5 }} initial="hidden" whileInView="show"  action="" className="border-2 border-neutral-700 rounded-xl p-8">
            <motion.div variants={item} className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-6">
              <div className="flex flex-col space-y-4">
                <label>Your Name</label>
                <input
                  className="w-full h-10 text-black bg-gray-500  px-2 caret-blue-300-600 rounded-2xl"
                  type="text"
                  placeholder="Name"
                  required={true}
                  name="name"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label>Your Email</label>
                <input
                  className="w-full h-10 text-black bg-gray-500 px-2 rounded-2xl"
                  type="email"
                  placeholder="test@gmail.com"
                  required={true}
                  name="user_email"
                />
              </div>
            </motion.div>
            <motion.div variants={item}  className="flex flex-col mt-10 ">
              <label className='blue-text-gradient'>Message</label>
              <textarea
                className="bg-gray-500 text-black p-4 mt-4 rounded-2xl"
                name="message"
                id=""
                cols="20"
                rows="8"
                required={true}
              ></textarea>
            </motion.div>
            <motion.button variants={item} className="bg-cyan-500 hover:bg-blue-600 transition-all ease-in duration-200 px-32 py-3 mt-10 rounded-full">Submit</motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;