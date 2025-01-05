import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact-container ">
        <h1 className="text-center fs-1 fw-bold text-uppercase" >conatct section</h1>
        <div className="line-and-star">
                <div className="line-contact"></div>
                <span className="star-contact"><i className="fa-solid fa-star"></i></span>
                <div className="line-contact"></div>
        </div>
  <form  className=" m-auto  w-50">
    <div className="form-floating mb-3 p-3">
      <input type="text" className="form-control border-0 border-bottom" id="userName" placeholder="userName" />
      <label htmlFor="userName" className=' text-success'>userName:</label>
    </div>

    <div className="form-floating mb-3 p-3">
      <input type="text" className="form-control border-0 border-bottom" id="userAge" placeholder="userAge" />
      <label htmlFor="userAge" className=' text-success'>userAge:</label>
    </div>

    <div className="form-floating mb-3 p-3">
      <input list="categories" type="email" className="form-control border-0 border-bottom" id="userEmail" placeholder="userEmail" />
      <label htmlFor="userEmail" className=' text-success'>userEmail:</label>
    </div>

    <div className="form-floating mb-3 p-3">
      <input  type="password" className="form-control border-0 border-bottom" id="userPassword" placeholder="userPassword" />
      <label htmlFor="userPassword" className=' text-success'>userPassword:</label>
    </div>

    <div className="btn p-3">
      <button  id="addBtn" className=" btn btn-success border-1"> send Massege </button>
    </div>
</form>
  </div>

  

    
    
    
    </>
  )
}
