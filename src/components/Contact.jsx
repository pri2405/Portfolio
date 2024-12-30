import linkedin from '../assets/linkedin.png'
import github from '../assets/Github.png'
import Lottie from 'lottie-react'
import contactpic from '../assets/contact.json'
import { FaLinkedin } from "react-icons/fa";


function Contact() {
    return ( 
        <section id="Contact" className="z-50 relative py-10 px-5 md:px-0 m-4 bg-black">
            <div className="mb-16 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
                        <h2 className="text-3xl font-bold mb-3 text-blue-500">Let's connect</h2>
                        <p>I'm always open to new oppurtunities and collaboration. let's collaborate and build impactful and innovative solutions.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.linkedin.com/in/payal-sharma-129513250/" className="text-foreground/60 hover:text-foreground/80">
                                <FaLinkedin className='size-10' />
                            </a>
                            <a href="https://github.com/pri2405/" className="text-foreground/60 hover:text-foreground/80 size-11">
                                <img src={github}></img>
                            </a>
                        </div>
                        <Lottie animationData={contactpic} className='size-84' />
                    </div>
                    <form className='w-full md:w-1/2 bg-gray-700 rounded-lg border border-blue-700 shadow-lg shadow-blue-500 p-10'>
                        <h1 className='text-4xl font-bold mb-7'>Contact me</h1>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-medium text-black-100'>Name</label>
                            <input type='text' id='name' placeholder='Full name' className='mt-1 p-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black'></input>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-sm font-medium text-black-700'>Email</label>
                            <input type='email' id='email' placeholder='Enter email' className='mt-1 p-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black'></input>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='msg' className='block text-sm font-medium text-black-700'>Message</label>
                            <textarea type='text' id='msg' placeholder='Your message' className='mt-1 p-2 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black'></textarea>
                        </div>
                        <button className='bg-blue-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
     );
}

export default Contact;