import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_uag2whd',
        'template_f6pnlph',
        form.current,
        'qPuueJOpW7Qo9Hhf2'
      )
      .then(
        result => {
          console.log(result.text)
          setDone(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div className='fullPart mt-20 flex'>
        <div className='left-sided ml-36'>
          <span className='text-5xl font-bold  mr-96'>Get in Touch</span>
          <br />
          <span className='text-5xl text-primary font-bold'>Contact me</span>
          <div
            className='blured'
            style={{
              background: 'rgb(238 210 255)'
            }}
          ></div>
          <div
            className='blured'
            style={{
              background: '#C1F5FF',
              top: '-90px',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
            }}
          ></div>
        </div>
        <div className='right-sided'>
          <form
            ref={form}
            onSubmit={sendEmail}
            action=''
            className='flex flex-col gap-5'
          >
            <input
              type='text'
              name='user_name'
              placeholder='Name'
              className='input border-2 input-bordered input-primary  w-96'
            />
            <input
              type='text'
              name='user_email'
              placeholder='Email'
              className='input border-2 input-bordered input-primary  w-96'
            />
            <textarea
              className='textarea h-36 border-2 textarea-primary mb-5'
              name='message'
              placeholder='Message'
            ></textarea>
            <button className='button w-32 ml-32 mb-5'>Send</button>
            <span className='text-green-600 text-center text-2xl'>
              {done && 'Thanks for contacting me!!'}
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
