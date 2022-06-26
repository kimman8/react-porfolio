import React, {useState} from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './Nav.css'

const Nav = () => {
  const [active, setActive] = useState('#')
  // const handleActiveState = () => {
  //   setActive('#about');
  // }
  return (
    <nav>
      <a href="#" className={active === '#' ? 'active' : ''} onClick={()=>setActive('#')}><AiOutlineHome/></a>
      <a href="#about" className={active === '#about' ? 'active' : ''} onClick={()=>setActive('#about')}><AiOutlineUser/></a>
      <a href="#experience" className={active === '#experience' ? 'active' : ''} onClick={()=>setActive('#experience')}><BiBook/></a>
      <a href="#services" className={active === '#services' ? 'active' : ''} onClick={()=>setActive('#services')}><RiServiceLine/></a>
      <a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={()=>setActive('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav