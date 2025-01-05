import React from 'react';
import Logo from '../../../assets/Gallery/avataaars.svg';

export default function Home() {
  return (
    <>
    
    <div className=" home-container   ">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-12">
          <div className="img">
            <img className=' w-75 mt-3' src={Logo} alt="logo" />
          </div>
          <h1>START FRAMEWORK</h1>
          <div className="line-and-star">
                <div className="line"></div>
                <span className="star"><i className="fa-solid fa-star"></i></span>
                <div className="line"></div>
          </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
