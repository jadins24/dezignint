import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-head'>
        <div className='contact-head-text'>

          <h1>CONTACT US</h1>

        </div>

      </div>
      <div className='contact-container'>
        
        <div className='contact-content1'>

        </div>
        <div className='contact-content2'>

                  <form>
                    <input type="text" name="name" placeholder='FULL NAME'/>
                    <input type="text" name="name" placeholder='E-MAIL'/>
                    <input  type="number"  name="phone" placeholder='PHONE'/>


                    <input type="submit" className='btn' value="Submit" />
                </form>
          
        </div>

        

      </div>

    </div>
  )
}

export default Contact