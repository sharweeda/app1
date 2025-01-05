import React from 'react';
import port1 from '../../../assets/Gallery/poert1.png';
import port2 from '../../../assets/Gallery/port2.png';
import port3 from '../../../assets/Gallery/port3.png';

export default function Portfolio() {
    return (
    <>
    <div className="portfolio-container  m-5 text-center ">
        
                <h1 className='text-center text-uppercase fw-bold'>portfolio component</h1>
                <div className="line-and-star">
                        <div className="line-contact"></div>
                        <span className="star-contact"><i className="fa-solid fa-star"></i></span>
                        <div className="line-contact"></div>
                </div>
        
         <div className="row  g-2 justify-content-center align-items-center ">
            <div className="col-md-4 ">
                <div className="image-container rounded-2">
                    <img src={port1} style={{ width: '19rem' }} alt="port1" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
            <div className="image-container  rounded-2">
                    <img src={port2} style={{ width: '19rem' }} alt="port2" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="image-container  rounded-2">
                    <img src={port3} style={{ width: '19rem' }} alt="port3" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="image-container  rounded-2">
                    <img src={port1} style={{ width: '19rem' }} alt="port1" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="image-container  rounded-2">
                    <img src={port2} style={{ width: '19rem' }} alt="port2" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="image-container  rounded-2">
                    <img src={port3} style={{ width: '19rem' }} alt="port3" />
                    <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div>
                </div>
            </div>
    </div> 
    </div>
    

</>
)
}









