import React, { useState } from 'react';
import './How.scss';
import Form1 from '../Form1/Form1';
const How = () => {

    const [openForm , setOpenForm] = useState (false) ;


  return (
    <div className='how'>
        <div className='how-container'>
            <div className='how-head'>
                <h1>How it works</h1>
            </div>
            <div className='how-content'>
                <div className='how-card1'>
                    <div className='how-card1-img'>

                    </div>
                    <div className='how-card1-text'>
                        <h4> Meet a designer</h4>
                    </div>

                </div>
                <div className='how-card1'>
                    <div className='how-card1-img'>

                    </div>
                    <div className='how-card1-text'>
                        <h4> Meet a designer</h4>
                    </div>

                </div>
                <div className='how-card1'>
                    <div className='how-card1-img'>

                    </div>
                    <div className='how-card1-text'>
                        <h4> Meet a designer</h4>
                    </div>

                </div>
                <div className='how-card1'>
                    <div className='how-card1-img'>

                    </div>
                    <div className='how-card1-text'>
                        <h4> Meet a designer</h4>
                    </div>

                </div>
                <div className='how-card1'>
                    <div className='how-card1-img'>

                    </div>
                    <div className='how-card1-text'>
                        <h4> Meet a designer</h4>
                    </div>

                </div>
                
            </div>
            <div className='how-btns'>
                <div className='how-btn' onClick={() => setOpenForm(!openForm)} >
                    BOOK FREE CONSULTATION
                </div>
                
                
            </div>
        </div>
        {openForm ? (
            <div className='forms' >
                <div>

               
                <h1 onClick={() => setOpenForm(!openForm)}>hi</h1>
                </div>
                <div>
                <Form1 />
                </div>
            </div>

        )
        :null
        

        }
    </div>
  )
}

export default How