import React from 'react';
import './Services.scss';
import { useNavigate } from 'react-router-dom';



const Services = () => {
    
    const navigate = useNavigate() ;

  return (
    <div className='service' >
        <div className='service-container'>
            <div className='service-head'>
                <h1>SERVICES</h1>

            </div>
            <div className='services'>
                <div className='service-padding'>
                    
                    <div className='service-card1' onClick={ () => navigate ("/Bedroom-design")} >
                        <img src={require('../../assets/img/modern-bedroom-design.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>BEDROOM DESIGN</h2>
                        </div>
                    </div>
                    

                </div>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/kitchen-design")} >
                        <img src={require('../../assets/img/kitchen.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>Modular Kitchen </h2>
                        </div>
                    </div>
                    

                </div>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/bathroom")} >
                        <img src={require('../../assets/img/bathroom.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>BATHROOM DESIGN</h2>
                        </div>
                    </div>
                    

                </div>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/storage")} >
                        <img src={require('../../assets/img/storage.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>STORAGE & WARDROBE</h2>
                        </div>
                    </div>
                    

                </div>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/pooja-unit")} >
                        <img src={require('../../assets/img/kitchen.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>Pooja Unit</h2>
                        </div>
                    </div>
                    

                </div>
                <div className='service-padding'>
                    <div className='service-card1' onClick={ () => navigate ("/kitchen-design")} >
                        <img src={require('../../assets/img/celling.jpg')} alt="img" />
                        
                        <div className='service-text'>
                            <h2>False Ceiling</h2>
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Services