import React from 'react';
import'./Service.css'
import {Link} from 'react-router-dom' 


export default function Services() {
    return (
        <div>
<nav class="navbar navbar-light" style={{backgroundColor:"red"}}>
                <span class="navbar-brand mb-0 h1"><h4>Hotel Ruchi Management</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"black"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"black"}}><h6>Services</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"black"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"black"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
        <div style={{backgroundImage:"url(https://i.pinimg.com/originals/bb/57/8d/bb578d8aab4e8b634a5b6f81e370fbb8.jpg)",height:"800px",backgroundSize:1400}}>
           
            <h2 id ="home" style={{color:"black"}}>Our Services</h2><br/><br/>


   

<div className="card-deck" >

  <div className="card text-white bg-primary mb-3">
    <div className="card-body">
      <h5 className="card-title"> <i className="fa fa-wifi" aria-hidden="true"> </i> </h5>
      <p className="card-text">Free wifi will be provided for the hotel users and it is unlimited, so user can watching what ever they require using this free wifi.</p>
      
    </div>
  </div>

  <div className=" card text-white bg-warning mb-3">
    
    <div className="card-body"  style={{color:"black"}}>
      <h5 className="card-title"> <i className="fa fa-coffee" aria-hidden="true"> </i> </h5>
      <p className="card-text">We provide tea and coffee free for the hotel users, you can drink as much as you need, its completely free.</p>
      
    </div>
  </div>

  <div className="card text-white bg-danger mb-3">

    <div className="card-body">
      <h5 className="card-title"> <i className="fa fa-ambulance" aria-hidden="true"></i></h5>
      <p className="card-text">At the time of any medical emergency we provide ambulance services .</p>
      
    </div>
  </div>
  

  <div className="card text-white bg-success mb-3">
    <div className="card-body">
      <h5 className="card-title"> <i className="fa fa-taxi" aria-hidden="true" ></i></h5>
      <p className="card-text">We provide free taxi services for the users, so users no need to worry about private taxi and spend more on it.</p>
    </div>
  </div> 
</div>
</div>
</div> 
    )
}
