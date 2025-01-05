import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=' '  >
    <div className=" footer-container text-white   ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <div className='text-center'>
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <span >Clark, MO 65243</span>
          </div>
        </div>

        <div className="col-md-4 ">
              <div className='text-center'>
              <h2>AROUND THE WEB</h2>
          <ul className=" icon d-flex justify-content-center align-items-center mx-4 list-unstyled px-3 text-center ">
              <li className="mx-2 ">
                <span>
                    <a href="#" aria-label="Facebook" >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </span>
              </li>
              <li className="mx-2  ">
                <span>
                  <a href="#" aria-label="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
              </li>
              <li className="mx-2  ">
                <span>
                  <a href="#" aria-label="LinkedIn" >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </span>
              </li>
              <li className="mx-2  ">
                <span>
                  <a href="#" aria-label="Globe" >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </span>
              </li>
          </ul>
              </div>
        </div>

        <div className="col-md-4">
              <div className="text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap <br/> theme created by Route</p>
              </div>
        </div>
      </div>
      
        <p className="footer-end  text-center text-white p-4 mt-5 ">Copyright © Your Website 2021</p>
      
    </div>
    </footer>
    </>
  )
}
