import React from 'react';
import './Bedroomdesign.scss';
import Image from '../../../assets/img/modern-bedroom-design.jpg';
import How from '../../How/How';

const Bedroomdesign = () => {
  return (
    <div className='design'>
      <div className='design-head' style={{ backgroundImage: 'url(' + Image + ')' }}>
          <div className='design-head-text'>
            <p>SERVICE</p>
            <h1>BEDROOM DESIGN </h1>
          </div>
      </div>
      <div className='design-container'>

        <div className='content-1'>
          <p>Indian kitchen designs are far different from their western counterparts, generally visible on the silver screen. Yes, although we may fantasise about those architectural wonders that impart minimalism and functionality within the living space, the fact is, Indians require something far more adapted to our cultures, traditions, food habits, and overall utilities kitchens in India offer. </p>

          <p> Every  household should have a kitchen setup that accommodates all the requirements of the members of the family and caters to the culinary habits, experiments and even misadventures  without disfiguring or destroying your interiors. </p>
        
        </div>

        <div className='content-2'>
           
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed1.jpg')} alt="" />
            </div>
          </div>
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed6.jpg')} alt="" />
            </div>
          </div>
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed3.jpg')} alt="" />
            </div>
          </div>
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed4.jpg')} alt="" />
            </div>
          </div>
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed5.jpg')} alt="" />
            </div>
          </div>
          <div className='content-padding'>
            <div className='content-img'>
              <img src={require('../../../assets/img/bed6.jpg')} alt="" />
            </div>
          </div>
        </div>
        

      </div>
      <How />
    </div>
  )
}

export default Bedroomdesign