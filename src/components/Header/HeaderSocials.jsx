import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kim-yuen/" target="_blank">
        <BsLinkedin/>
        </a>
        <a href="https://github.com/kimman8" target="_blank">
            <BsGithub/>
        </a>
        <a href="https://github.com/kimman8" target="_blank">
            <FiDribbble/>
        </a>
    </div>
  )
}

export default HeaderSocials