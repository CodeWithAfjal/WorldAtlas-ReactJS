import React from 'react'
import './contact.css'



function Contact() {
  return (
<section className='section-contact'>
  <h2 className='container-title'> Contact Us</h2>




 <div className="contact-wrapper container">
   <form action="">
    <input 
    type="text"
    className="form-control"
    required 
    autoComplete='off'
    placeholder='Enter your name..!'
    name='username'
    />

     <input type="email"
    required 
    autoComplete='false'
    placeholder='Enter your email..!'
    name='email'
    className='form-control'/>

  <textarea className='form-control'
  rows="10"
  placeholder='Enter Your Message'
  name='message'
  required
  autoComplete='false'></textarea>
  <button type='submit' value="send"> Send</button>
    </form>

 </div>

</section>

  )
}

export default Contact