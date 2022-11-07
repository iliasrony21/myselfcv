import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import facebook from '../../img/Facebook.png'
import shopify from '../../img/Shopify.png'
import amazon from '../../img/amazon.png'

const Works = () => {
  return (
    <div>
      <div className='flex mb-[-96px]'>
        <div className='left-side  ml-24'>
          <div className='myawesome'>
            <span className='text-5xl font-bold'>Works for All these</span>
            <br />

            <span className='text-5xl text-primary font-bold '>
              Brands & Clients
            </span>
            <p className='mt-2 mb-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate <br />
              esse, ad odio minus nihil, officia necessitatibus provident atque
            </p>

            <button className='button mt-20 w-56 '>Hire Me</button>

            <div
              className='blur2'
              style={{
                background: 'rgb(238 210 255)',
                top: '132rem',
                width: '20rem',
                height: '21rem',
                left: '55rem'
              }}
            ></div>
            <div
              className='blur2'
              style={{
                background: '#C1F5FF',
                top: '128rem',
                width: '20rem',
                height: '21rem',
                left: '-9rem'
              }}
            ></div>
          </div>
        </div>
        <div className='w-right'>
          <div className='main-circle shadow-2xl '></div>
          <div className='part flex'>
            <div className='social-circle shadow-2xl border-4 border-grey'>
              <img className=' ' src={upwork} alt='upwork' />
            </div>
            <div className='social-circle shadow-2xl border-4 border-grey'>
              <img className=' p-5' src={fiver} alt='fiver' />
            </div>
            <div className='social-circle shadow-2xl border-4 border-grey'>
              <img className='' src={facebook} alt='facebook' />
            </div>
            <div className='social-circle  shadow-2xl border-4 border-grey '>
              <img className=' ml-2 mt-[-5px]' src={shopify} alt='shopify' />
            </div>
            <div className='social-circle border-4 border-grey  shadow-2xl'>
              <img className=' mt-[-8px]' src={amazon} alt='amazon' />
            </div>
          </div>

          <div className='blue-circle'></div>
          <div className='yellow-circle mb-0'></div>
        </div>
      </div>
    </div>
  )
}

export default Works
