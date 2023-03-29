import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#002029] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#E01A4F]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Deon! It's a pleasure to meet you. I hope you enjoy your day!</p>
                </div>
                <div>
                    <p>
                        I enjoy all forms of creative media from videography to graphic design and music production. You can also find me playing videogames competitively or on a field kicking a ball! 
                        I strongly believe there is great value in creating lasting relationships and developing software that makes people's lives easier and fulfilling.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;