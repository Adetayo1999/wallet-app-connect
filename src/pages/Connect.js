import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Keystore from '../component/Forms/keystore'
import Mnemonic from '../component/Forms/mnemonic'
import PrivateKey from '../component/Forms/PrivateKey'

export default function Connect()
{
  const [tab, setTab] = useState(0)
  return (
    <div className='text-white p-5'>
      <div>
        Connect to wallet
        <NavLink to={'/wallet'}>
        <p>&larr; Back</p>

        </NavLink>
        
      </div>
      <div className='my-2 flex gap-2 border-b items-center  border-white cursor-pointer'>
        <div className={tab === 0 ? "flex bg-white items-center justify-center p-2 text-black" : "text-blue-500 hover:text-gray-200 p-2"} onClick={()=> setTab(0)}>
          Mnemonic
        </div>
        <div className={tab === 1 ? "flex bg-white items-center justify-center p-2 text-black" : "text-blue-500 hover:text-gray-200 p-2"} onClick={()=> setTab(1)}>
          KeyStore
        </div>
        <div className={tab === 2 ? "flex bg-white items-center justify-center p-2 text-black" : "text-blue-500 hover:text-gray-200 p-2"} onClick={()=> setTab(2)}>
          Private Key
        </div>
      </div>
      <div>
        <div className={tab === 0 ? "flex flex-col": " hidden"}>
          <Mnemonic/>
        </div>
        <div className={tab === 1 ? "flex flex-col": " hidden"}>
          <Keystore/>
        </div>
        <div className={tab === 2 ? "flex flex-col": "hidden"}>
          <PrivateKey/>
        </div>
      </div>

      

    </div>
  )
}
