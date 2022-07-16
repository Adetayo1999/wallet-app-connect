import React from 'react'

export default function PriceCard(currency)
{
    const {name, price,logo} = currency
  return (
      <div className='flex items-center gap-2 w-48 border rounded-md p-2 border-white text-white '>
          <img className='w-8 h-8 object-cover'  src={logo} alt='logo' />
          <div>
              <h1 className='font-bold text-2xl'>${price}</h1>
              <p>{name}</p>
          </div>
    </div>
  )
}
