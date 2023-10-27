import React from 'react';
import {  Form,  Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
    <div className='container'>
     <p className=' fw-bold  home text-center'>Say goodbye to the stress of forgotten password and the fear of data breaches </p>
    <div className=' text-center '> <span> Say goodbye to the stress of forgotten password and the fear of data branches. Our password manager is designed to </span>
   <p> keep your digital life safe and secure , while simplifying the process of password managment. </p> 
   </div>
   <Form className='text-center mb-5'>
    <Button className='homeb border border-0 me-3 rounded-5 px-4 fw-medium' > Try WebGuard Now</Button>
   <button class="btn btn-outline-dark rounded-5 px-4">Learn more</button>
   
   </Form>

   <div className=''>
    <img src="react1.png" className='img-fluid w-100'  alt="" />
   </div>
   <div className='me-lg-5 mb-5 '> <p className='fw-bold  home2 '>Automate the managment of all your passwords with our auto-pilot feature </p>
   <span className=' '>Welcome to our password managment platform , where you can put your password managment on auto-pilot. with</span> <p>  our auto-pilot feature ,you can effortlessly manage all of your password in one place .</p> 
   </div>
   <div className=' container px-4 '>
   <div className="row gx-5 ">
  <div className="col-lg-6 col-sm-12  rounded-0">
    <div className='bg-light'>
    <p className="fs-2 fw-bold px-4">Log in and go</p>
    <p className="px-4">Once you save your password in WebGuard, you'll always have it when you need it. Logging in is fast and easy.</p>
    <div className="card1">
      <img src="login-go.png" className="img-fluid" width={600} alt="" />
    </div>
    </div>
  </div>
  <div className="col-lg-6 col-sm-12  rounded-0">
    <div className='bg-light'>
    <p className="fs-2 fw-bold px-4">Dark web monitoring</p>
    <p className="px-4">Stop worrying about data breaches. Get alerts if your personal information is at risk.</p>
    
    <div className="card1">
      <img src="darkweb.png" className="img-fluid" width={600} alt="" />
    </div>
  </div>
  </div>
</div>
</div>

<div className=' mt-4 container px-4 '>
<div className="row gx-5">
  <div className="col-lg-6 col-sm-12  rounded-0">
    <div className='bg-light'>
    <p className="fs-2 fw-bold px-4">Two-factor authentication</p>
    <p className="px-4">Easily identify websites where you can turn on two-factor authentication and use WebGuard as an authenticator.</p>
    <div className="card1">
      <img src="twostep.png" className="img-fluid" width={600} alt="" />
    </div>
  </div>
  </div>
  <div className="col-lg-6 col-sm-12 rounded-0">
    <div className='bg-light'>
    <p className="fs-2 fw-bold px-4">Passwordless login</p>
    <p className="px-4">Gain instant access to your WebGuard vault by using the WebGuard Authentication instead of your master password.</p>
    <div className="card1">
      <img src="password.png" className="img-fluid" width={600} alt="" />
    </div>
    </div>
  </div>
</div>
</div>
</div>

{/*footer */}
<div className='container-fluid bg-dark text-light p-5 '>
<div className='row '>
<div className="col-lg-2 ms-5">
  <p className='fs-3 fw-bold'> <img src="webguard.png" width={30} alt="" />WebGuard</p>
  <p>Discover the full scope of our services and see how we can help you</p>
</div>
<div className="col-lg-2"> 
<p>Product</p>
<p>Communicaton</p>
<p>Remote Access</p>
<p>View All Product</p>
</div>
<div className="col-lg-2">
  <p>Company</p>
  <p>About Us</p>
  <p>Partner</p>
  <p>Newsroom</p>
  <p>Contact Us </p>
</div>
<div className="col-lg-2">
  <p>Features</p>
  <p>Autofill</p>
  <p>Password Vault</p>
  <p>Digital Wallet</p>
  <p>Password Manager</p>
  <p>Dark Monitoring</p>
  <p>Authenticator</p>
</div>
<div className="col-lg-2"> 
<p>Resources</p>
<p>My Acoount</p>
<p>Support</p>
<p>Blog</p>
<p>Partner</p>
<p>Comunnity</p>
<p>Privacy policy</p>
</div>

   
</div>


</div>
    
    </div>
  )
}

export default Navbar
