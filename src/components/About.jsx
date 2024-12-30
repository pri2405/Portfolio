import React from 'react';
import { IoArrowForward } from 'react-icons/io5'
import coding from '../assets/coding.png'
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {x: -10},
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

function About() {
    return ( 
        <div className='text-white max-w-[1200px] mx-auto my-12' id="About">
            <div className='md:grid md:grid-cols-2 sm:py-16'>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -200}}
                        transition={{duration: 2.0}}
                        className='my-auto mx-6'
                    >
                        <h2 className='text-4xl font-bold mb-4 primary-color border-b border-blue-500 w-max pb-4'>About Me</h2>
                        <p className='text-base lg:text-lg'>My name is Payal kumari. I am 3rd year Btech CSE student at Dr. APJ Abdul Kalam Women's Institute of Technology, Darbhanga. I am DSA problem solver and MERN stack Web Developer. I solved over 350 qs on leetcode which improves my problem-solving skills. I have built projects such as Simon say game, Wanderlust(inspired by airbnb) and zerodha clone. </p>
                        
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 200}}
                    transition={{duration: 2.0}}
                >
                    <motion.img 
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className='mx-auto rounded-full py-8 md:py-0' 
                        src={coding} 
                        width={350} 
                        height={250} 
                    ></motion.img>
                </motion.div>
            
            </div>
        </div>
     );
}

export default About;