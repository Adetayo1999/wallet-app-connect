import React from 'react'
import Logo from "../assets/fixLogo.png"
import Wallet from "../assets/walletConnect.svg"
import { useNavigate, NavLink } from 'react-router-dom'

export default function Header()
{
  // const navigate = useNavigate()
  // const homepage = () => navigate('/')
  return (
    <div className=' p-2 flex justify-between items-center text-white'>

     
      <img className='w-10 h-8' src={Wallet} alt="logo" />

      
      <p className='border p-2 rounded-xl border-white'>EN</p>
    </div>
  )
}
