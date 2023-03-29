import React, {useState} from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import 'animate.css';
import {Link} from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div name='home' className='w-full h-screen bg-[#002029]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className=''>
              <p className='text-[#B5F44A] animate__animated animate__fadeIn '>Hi, my name is</p>
              <h1 className='Shadow text-4xl sm:text-7xl font-bold text-[#CDDDE1] animate__animated animate__fadeIn animate__delay-1s'>Deon Davis</h1>
              <h2 className= 'text-4xl sm:text-7xl font-bold text-[#bde0a2] animate__animated animate__fadeIn animate__delay-2s'>I build things on the internet.</h2>
              {/* <p className='text-[#B4D9E3] py-4 max-w-[700px] animate__animated animate__fadeIn animate__delay-3s'>You can find me </p> */}
                  <Link to='work' smooth={true} duration={500} offset={-50}>
                    <div className='grid grid-cols-2 grid-div gap-4 animate__animated animate__fadeIn animate__delay-3s'>
                      
                      <button className=' btn hover:scale-110 duration-500 text-white border-[#B5F44A] border-2 px-6 py-3 my-2 shadow-lg flex items-center  hover:bg-[#E01A4F] hover:border-[#53B3CB] '>
                        View Work <HiArrowNarrowRight/></button> 
                          
                    </div>
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Home