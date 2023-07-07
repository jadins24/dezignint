import React from 'react';
import './About.scss';
import How from '../How/How';

const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>
            <div className='about-content1' >
                
                <div className='about-img'>
                  <img src={require('../../assets/img/about.jpg')}  alt="" />
                </div>

            </div>
            <div className='about-content2'>
              <h3>GET TO KNOW</h3>
              <h1>Your Trusted Interior Company</h1>

              <p>Interior design is a go-out-of-your-house home business. While doing the business aspects inside the home, most sales will be done at the client's home or office as you evaluate the space, match color swatches to existing furniture and measure windows for draperies, etc.</p>


            </div>

        </div>
        <How />
    </div>
  )
}

export default About