import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs, FaHtml5, FaJs, FaCss3Alt } from 'react-icons/fa';
import {motion} from 'framer-motion';

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

const Skills = () => {
    return (
        <div className="relative py-10 px-4 m-2" id="Skills">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -10}}
                transition={{duration: 1.0}}
                className='mb-16 max-w-7xl mx-auto text-3xl font-bold mb-8 text-white border-b border-blue-500 w-max pb-4'>
                Skills
            </motion.h2>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaHtml5 className="text-7xl text-red-700" /> <div className="text-center">HTML</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaCss3Alt className="text-7xl text-blue-700" /> <div className="text-center">CSS</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaJs className="text-7xl text-black-700 fill-current-yellow" /> <div className="text-center">JS</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-700" /> <div className="text-center">React</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <SiMongodb className="text-7xl text-cyan-700" /> <div className="text-center">Mongodb</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaNodeJs className="text-7xl text-green-700" /> <div className="text-center">NodeJs</div>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-700" /> <div className="text-center">Tailwind css</div>
                </motion.div>
                
            </motion.div>
        </div>

    )
}

export default Skills;