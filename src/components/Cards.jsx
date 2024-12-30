import React from 'react';
import githubpic from '../assets/Github.png'

function Cards({item}) {
    return ( 
        <div className='border rounded-lg bg-blue-200 w-[300px] lg:w-[350px]'>
            <img src={item.image} className='rounded-lg  size-[300px] lg:size-[350px]'></img>
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2 text-black'>{item.title}</h1>
                <p className='text-black'>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={githubpic} className='w-6'></img>
                        </a>
                    </button>
                </div>
            </div>
        </div>

     );
}

export default Cards;