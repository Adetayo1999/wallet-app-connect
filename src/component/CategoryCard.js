import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import { useNavigate, NavLink } from 'react-router-dom'

export default function CategoryCard(category)
{
  const navigate = useNavigate()
  const walletpage = () =>
  {
    console.log("test")
    navigate('/wallet')
  }

  return (
    <div className='flex flex-col gap-1 p-4  w-full  sm:w-1/2 items-start text-left border rounded-md'
    >
      <div  className='w-10 h-10'>
      <BsInstagram />
      </div>

    
  
      <h1 className='text-2xl font-medium text-gray-300 '>{category.name}</h1>
      <NavLink to="/wallet">
        <p className='text-gray-500' onclick={walletpage}>{category.description}</p>
        <strong className='text-gray-500'>Click here &rarr;</strong>
      </NavLink>
  </div>
  )
}
