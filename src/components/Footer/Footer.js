import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-content1'>
            <img src={require('../../assets/img/logo.png')} alt="" />

            <p> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document on meaningful content.</p>
            </div>
            <div className='footer-content2'>
                <h2>Quick Links</h2>

                <div className='quick-links'>
                    <a href="/">Home</a>
                    <a href="/about">About </a>
                    <a href="/services">Services </a>
                    <a href="/contact">Contact </a>
                </div>
            </div>
            <div className='footer-content3'>
                <h2>Help</h2>

                <div className='help'>
                    <a href="/">FAQs</a>
                    <a href="/">Terms & Conditions </a>
                    <a href="/">Privacy Policy </a>
                    <a href="/">Help </a>
                    <a href="/">Service </a>
                </div>
            </div>
            <div className='footer-content4'>
                <h2>Newsletter</h2>

                <form>
                    <input type="text" name="name" placeholder=' E-Mail'/>
                    <input type="submit" className='btn' value="Submit" />
                </form>
            </div>

        </div>
    </div>
  )
}

export default Footer