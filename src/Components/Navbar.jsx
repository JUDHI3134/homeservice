import React, { useState } from 'react'
// import logo from '../../public/logo7.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll'


const Navbar = () => {

    const [menu,setMenu] = useState(false);

    const navItems = [
        {id: 1,text: "Home"},
        {id: 2,text: "About"},
        {id: 3,text: "Services"},
        {id: 4,text: "Contact"},
    ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white z-50 h-50 shadow-md fixed top-0 right-0 left-0'>
          <div className='flex justify-between items-center h-30'>
            <div className='flex space-x-2 items-center'>
                {/* <img src={logo} alt="" className='w-[80px] h-[80px] rounded-full'/> */}
               <h1 className='font-bold text-xl py-6'>Home Services</h1>
            </div>
            {/*desktop Navbar */}
            <div>
                <ul className='md:flex space-x-8 hidden text-xl'>
                    {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                    <Link to="/signup"><button className='bg-slate-900 text-white px-3 py-1.5 rounded-lg'>Login</button></Link>
                </ul>
                <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}</div>
            </div>
          </div>
           {/*mobile Navbar */}
           {menu && (
            <div className='bg-white'>
          <ul className='md:hidden flex flex-col justify-center items-center h-50 space-y-3 text-xl'>
          {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        onClick={()=>setMenu(!menu)}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                    <Link><button className='bg-slate-900 text-white px-3 py-1.5 rounded-lg'>Login</button></Link>
                </ul>
          </div>
           )}
          
      </div>
    </>
  )
}

export default Navbar