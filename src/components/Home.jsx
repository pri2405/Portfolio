import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import reactpic from '../assets/React.png'
import nodepic from '../assets/NodeLogo.png'
import mongopic from '../assets/mongodb.svg'
import girl from '../assets/girl.avif'
import expresspic from '../assets/Express.png'
import resume from '../assets/resume.pdf'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

function Home() {
    return ( 
        <div className='text-[#4DA1A9] h-screen flex flex-wrap md:flex-row flex-col justify-center' style={{position:"relative"}} >
            
            <div className='col-span-2 px-3 my-auto sm:items-center'>
                <h1 className='text-white text-4xl sm:text-3xl lg:text-5xl font-bold mb-4'>
                    <span className='text-white'>Hi! I'm Payal</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            100,
                            "Web developer",
                            100,
                        ]}
                        wrapper='span'
                        speed={30}
                        repeat={Infinity}
                        className='text-[#FF8383]'
                     />
                </h1>
                <p className=' mb-4 text-white'>I love coding and creating dynamic and impactful website</p>
                <button className='bg-gray-400 text-black px-3 py-2 w-max rounded-md mt-4 font-semibold mt-4'>
                    <a href={resume} target='blank' type='application/pdf' rel='alternate' media='print'>My Resume</a>
                </button>

            </div>
            
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 200}}
                transition={{duration: 2.5}}
                className='md:w-1/2 relative flex justify-center items-center'
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                >
                    <img src={girl} className='lg:h-[60vh] h-96 opacity-100 md:rounded-full rounded-md' />
                    <img src={reactpic} className='absolute md:w-20 w-10 top-36 left-4 rounded-full md:hidden' />
                    <img src={nodepic} className='absolute md:w-20 w-10 top-10 right-5 md:hidden' />
                    <img src={mongopic} className='absolute md:w-20 w-10 left-5 bottom-5 rounded-full md:hidden' />
                    <img src={expresspic} className='absolute md:w-20 w-10 right-5 bottom-5 rounded-full md:hidden' />
                </motion.div>
            </motion.div>
            
        </div>
     );
}

export default Home;