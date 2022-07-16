import React from 'react'
import { FaTelegram, FaTwitterSquare } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


export default function Footer() {
  return (
    <div className='bg-gray-800 p-4 gap-3 flex flex-col items-center justify-center w-full -mt-4'>
      <div className='flex gap-3'>
        <a href='https://t.me/krakenfxofficial' rel='noopener' target="_blank">
          <FaTelegram className='text-white' />
        </a>
        

      </div>
      <div>
        <p className='text-center text-white'>
          Terms of Service | Privacy Policy | Cookie Policy
          </p>
      </div>

    </div>
  )
}
