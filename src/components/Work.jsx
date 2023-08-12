import React from 'react';
import cryptowatch from '../assets/cryptowatch.PNG';
import clueo from '../assets/clueo.png';
import happycow from '../assets/happycow.png'
import portfolio from '../assets/portfolio-screenshot.png';
import swiftvue from '../assets/swiftvue.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#002029]'>
        <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='pt-10 text-4xl font-bold inline border-b-4 text-gray-300 border-[#53B3CB]'>Work</p>
                <p className='py-2'>// Check out some of my recent work</p>
            </div>
                {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                {/* Grid card item */}
                <div 
                style={{backgroundImage:`url(${portfolio})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-4 font-bold text-white tracking-wider'>
                            Portfolio
                        </span>
                        <p className='text-white px-4'>A fully responsive portfolio site built implementing Javascript, React, Tailwind, & React-Scroll. It includes project cards, animations, complete responsiveness, and contact form submission. </p>
                        <div className='pt-8 text-center'>
                            
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            
                            <a target='_blank' rel='noreferrer' href='https://github.com/DeonVisad/Portfolio/tree/master'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${cryptowatch})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-4 font-bold text-white tracking-wider'>
                            CryptoWatch
                        </span>
                        <p className='text-white px-4'>Sign in with test@test.com & password | A crypto tracker built implementing Javascript, React, Tailwind & Firebase.</p>
                        <div className='pt-8 text-center'>
                            <a href='https://deonvisad.github.io/cryptoWatch/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/DeonVisad/cryptoWatch'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${clueo})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-4 font-bold text-white tracking-wider'>
                            Clueo ecommerce
                        </span>
                        <p className='text-white px-4'>A partial frontend ecommerce site built implementing Javascript, React & Redux. It includes a shopping cart with local storage & product listings. </p>
                        <div className='pt-8 text-center'>
                            <a href='https://clueo.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/DeonVisad/clueo-website'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${happycow})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-4 font-bold text-white tracking-wider'>
                            Happy Cow
                        </span>
                        <p className='text-white px-4'>Happy Cow is a delightful Dairy-Free Recipe Application developed in React JS and styled using Tailwind CSS. This app is designed to help users discover and explore a wide range of dairy-free recipes that are not only delicious but also healthy. </p>
                        <div className='pt-8 text-center'>
                            <a href='https://thehappycow.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/DeonVisad/HappyCow'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${swiftvue})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl px-4 font-bold text-white tracking-wider'>
                            SwiftVue
                        </span>
                        <p className='text-white px-4'>A landing page for a concept campaign management dashboard called SwiftVue </p>
                        <div className='pt-8 text-center'>
                            <a href='https://swiftvue.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/DeonVisad/swiftvue'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Work;