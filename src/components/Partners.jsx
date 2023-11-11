import React from 'react'
import { Link } from 'react-router-dom'
import PaperzLogo from '../assets/images/logo-paperz.svg'
import MartinoLogo from '../assets/images/logo-martino.svg'
import DorfusLogo from '../assets/images/logo-dorfus.svg'
import SquareLogo from '../assets/images/logo-square.svg'
import GobonaLogo from '../assets/images/logo-gobona.svg'


const Partners = () => {
  return (
    <div className="partners">
        <div className="container">
        <a href="#" target="_blank"><img src={PaperzLogo} alt="Paperz logo" /></a>
        <a href="#" target="_blank"> <img src={MartinoLogo} alt="Martino logo" /></a>
        <a href="#" target="_blank"><img src={DorfusLogo} alt="Dorfus logo" /></a>
        <a href="#" target="_blank"><img src={SquareLogo} alt="Square logo" /></a>
        <a href="#" target="_blank"><img src={GobonaLogo} alt="Gobona logo" /></a>
        </div>
    </div>
  )
}

export default Partners