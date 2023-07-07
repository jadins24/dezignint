import React from 'react';
import './Form1.scss';
const Form1 = () => {

    

  return (
    <div className='form1'>
        <div className='form1-container'>
            <div className='form1-content1'>
                <img src={require('../../assets/img/about.jpg')}  alt="" />
            </div>
            <div className='form1-content2'>
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

export default Form1