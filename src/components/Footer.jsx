import React from 'react';
import './footer.css';
import Instagram from './instagram.png'
import Facebook from './faceboook.png'
import Sazy from './footer img.svg'; // Ensure the file path and name are correct
import Whatsapp from './whatsapp.png'
import Linkedin from './linkedin.png';

const Footer = () => {
    return (
        <div className='bg'>
          <div className='contact'>
            <h1>C o n t a c t</h1>
            <div className='icons'>
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Linkedin} alt="" />
            </div>
            <div className='links'>
            <div className='useful'>
              <h1>Useful Information</h1>
              <ul>Our Values</ul>
              <ul>Trade Enquries</ul>
              <ul>Delivery Information</ul>
              <ul>FAQ</ul>
              <ul>Blog</ul>
              <ul>Terms & Condition</ul>
              <ul>Privacy Policy</ul>
            </div>
            <div className='find'>
              <h1>Find Us</h1>
              <ul>27 Old Street</ul>
              <ul>Delhi, India</ul>
              <ul>Monday to Friday 10am - 4pm</ul>
            </div>
            <div className="Contact">
              <h1>Contact Us</h1>
              <ul>Email:  saksham.juneja007@gmail.com</ul>
              <ul>Whatsapp: +91 798857 6194</ul>
            </div>
            </div>
          </div>
            <div className=' flex justify-center items-center py-8'>
              
                <img src={Sazy} alt="Footer Decorative" className="svg" />
            </div>
            <h1 className='copywrite'>Made and Mantain By Saksham Juneja © 2024 - Sazy</h1>
        </div>
    );
};

export default Footer;
