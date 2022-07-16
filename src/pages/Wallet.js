import React from 'react'
import walletImg from "../assets/walletConnect.svg"
import {CRYPTO_WALLETS} from  "../assets/wallets"
import WalletCard from '../component/walletCard'
import COINBG from "../assets/COIN_BIG.png"

export default function Wallet() {
  return (
    <div className='text-white flex flex-col items-center h-full justify-center'>
      <div className='flex flex-col items-center w-2/3 my-8 justify-center text-center'>
        <img src={walletImg } alt="wallet-connect"  className='w-24 h-24'/>
        <h1 className='text-3xl font-extrabold text-gray-300'>Wallets</h1>
        <p className='text-gray-400'>
        Multiple iOS and Android wallets support the DappTradeFix protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
        </p>
      </div>
      <div className='my-8 gap-3 flex-wrap flex mx-6 items-center justify-center'>
        {/* <WalletCard name={"coinbase"} src={COINBG} /> */}
        
        {
          CRYPTO_WALLETS.map((wallet, i) => (
            <WalletCard key={i} {...wallet} />
          ))
    }
    
      </div>
    </div>
  )
}
