import React from 'react'
import PriceCard from '../component/PriceCard'
import { CRYPTO_CURRENCIES } from '../assets/cryptoCurrency'
import HERO from "../assets/castle.png"
import HERO2 from "../assets/hero.jpg"
import HERO3 from "../assets/1.png"
import { CATEGORY_LIST } from '../utils/constant'
import Footer from '../component/Footer'
import CategoryCard from '../component/CategoryCard'

export default function Home() {
  return (
    <div className=' text-white flex flex-col justify-between'>
      <div className='px-4 my-8 p-8  flex flex-col justify-center item-center h-screen w-full'>
     
      
        <img className=' sm:w-full md:w-2/3 flex place-items-center items-center object-contain' src={HERO3} alt="hero"/>
      <div className='flex flex-wrap gap-2 z-10 items-center justify-center'>
      {
        CRYPTO_CURRENCIES.map(currency => (
          <PriceCard key={currency.symbol} {...currency} />
        ))
      }
      </div>
      </div>
      <div className='my-3 pb-4 flex flex-col justify-center items-center bg-gray-900 w-full'>
        <h1 className='text-2xl mt-8 font-bold'>
        Please Select Issue category
        </h1>
        <p>
        Which of these is related to your issue?
        </p>
        <div className='flex flex-col items-center justify-center gap-8 px-12 my-8 cursor-pointer'>
        {
          CATEGORY_LIST.map((category,i) => (
            <CategoryCard key={i} {...category} />
          ))
        }
        </div>
          <h1 className='text-2xl font-bold text-gray-600'>Ready to Start</h1>
          <h1 className='text-center text-2xl w-1/2'>We are ready to provide help in any related issues you are having with your wallet account</h1>
          <textarea
            placeholder='Message'
            className='bg-gray-100 p-2 rounded-md outline-none text-black my-2'
            cols={40}
            rows={5}
        />
        <button className='bg-blue-300 rounded-md mb-3 text-black p-2 flex w-80 item-center justify-center'>Get Started &rarr;</button>
      </div>
<Footer/>
    </div>
  )
}