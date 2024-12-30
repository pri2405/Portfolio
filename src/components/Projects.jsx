import React from 'react';
import Cards from './Cards.jsx'
import portfolio from '../assets/portfolio.png'
import simon from '../assets/simon.png'
import wanderlust from '../assets/wanderlust.png'
import zerodha from '../assets/zerodha.png'
import {motion} from 'framer-motion'

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

function Projects() {
    const projection = [
        {
            title: "Portfolio",
            desc: "this portfolio website is build with reactjs, tailwind css. this website represents me with my skills.",
            image: portfolio,
            github: ""
        },
        {
            title: "Simon say game",
            desc: "This game is developed in html, css and js. this is very fun game which improves your memory.",
            image: simon,
            github: "https://github.com/pri2405/Simon-say-game"
        },
        {
            title: "Wanderlust",
            desc: "it is full stack MERN project which is inspired by airbnb. this projects helps me to work on real-life projects.",
            image: wanderlust,
            github: "https://github.com/pri2405/Major-Project"
        },
        {
            title: "Zerodha clone",
            desc: "It is also full stack MERN project.",
            image: zerodha,
            github: "https://github.com/pri2405/FullStackBrokerageProject"
        }
    ]
    return ( 
        <section id='Projects' className='relative py-10 px-4 m-2'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <motion.h2 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -10}}
                    transition={{duration: 1.0}}
                    className='mb-16 max-w-7xl mx-auto text-3xl font-bold mb-8 text-white border-b border-blue-500 w-max pb-4 items-center'>
                    My Projects
                </motion.h2>
                <motion.div 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -10}}
                    transition={{duration: 1.0}}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10' 
                >
                    {projection.map((items) => {
                            return <Cards item={items} />
                        })}
                    
                </motion.div>
            </div>
        </section>
     );
}

export default Projects;