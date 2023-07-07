import React from 'react';
import './Form.scss';



const Form = () => {
    
    
  return (
    <div className='form'>
        <div className='form-container'>

            <div className='form-head'>
                <h2>
                    CONTACT US
                </h2>
            </div>
            <div className='form-content'>
                <div className='form-text'>
                    <h1>LET'S DISCUSS YOUR PROJECT</h1>
                    <p> Fill out the form and our manager will contact you for consultation.</p>
                </div>
                <form>
                    <input type="text" name="name" placeholder='FULL NAME'/>
                    <input  type="number"  name="phone" placeholder='PHONE'/>
                    <input type="submit" className='btn' value="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form