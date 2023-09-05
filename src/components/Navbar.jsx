import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import 'animate.css';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#002029] text-white'>
        <div className='animate__animated animate__fadeIn animate__delay-4s'>
            <img src={Logo} alt="Logo Image" style={{width: '100px'}} />
        </div>
    
        {/* menu */}
            <ul className='hidden md:flex animate__animated animate__fadeIn animate__delay-4s'>
                <li className='hover:text-[#B5F44A]'>
                <Link to='home' smooth={true} duration={500}>Home</Link> 
                </li>
                <li className='hover:text-[#53B3CB]'>
                <Link to='about' smooth={true} duration={500}>About</Link> 
                </li>
                <li className='hover:text-[#F15946]'>
                <Link to='skills' smooth={true} duration={500}>Skills</Link> 
                </li>
                <li className='hover:text-[#E01A4F]'>
                <Link to='work' smooth={true} duration={500} offset={-50} >Work</Link> 
                </li>
                <li className='hover:text-[#B5F44A]'>
                <Link to='contact' smooth={true} duration={500}>Contact</Link> 
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#002029] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link> </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 animate__animated animate__backInLeft animate__delay-5s'>
        <ul>
            <li className= 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53B3CB]'>
                <a className= 'flex justify-between items-center w-full text-white' href='https://github.com/DeonVisad'>
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className= 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9dd240]'>
                <a className= 'flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/deon-davis-/'>
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className= 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F15946]'>
                <a className= 'flex justify-between items-center w-full text-white' href=''>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
            {/* <li className= 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E01A4F]'>
                <a className= 'flex justify-between items-center w-full text-gray-300' href=''>
                    Email <HiOutlineMail size={30} />
                </a>
            </li> */}
        </ul>

        </div>

    
    </div>

  
  
  
  
  )
}

export default Navbar;