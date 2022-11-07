import React from 'react'
import './Footer.css'
import wave from '../../../img/wave.png'
import github from '../../../img/github.png'
import linkedin from '../../../img/linkedin.png'
import instagram from '../../../img/instagram.png'

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-primary text-white text-lg'>
        <div>
          <span className='footer-title pt-5'>Services</span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <span className='footer-title '>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </footer>
      <div>
        <span className='gmail mb-5'>roniahmd33@gmail.com</span>
      </div>
    </div>
  )
}

export default Footer
