import { BrowserRouter as Router, NavLink } from "react-router-dom";
import React from "react";



const Header = () => {
    return (
    
        <header className="header-main">
          <div className="header-upper">
              <div className="container">
                  <div className="row">
                  <ul>
                        <li><a href="#">Signup/login</a></li>
                        <li><a href="shopcart.html"><i class="fa fa-shopping-cart"></i> <span>cart(<span
                                className="cartitems">0</span>)</span></a></li>
                    </ul>
                  </div>
              </div>
          </div>
          <div className="header-lower clearfix">
              <div className="container">
              <div className="row">
                <h1 className="logo"><a href="index-2.html"><img src="images/logo.png" alt="image" /></a></h1>

                      <div className="menubar">
                          <nav className="navbar">
                              <div className="nav-wrapper">
                                  <div className="navbar-header">
                                      <button  className="navbar-toggle"><span className="sr-only">Toggle navigation</span>
                                          <span className="icon-bar"></span></button>
                                  </div>
                                  <div className="nav-menu">
                                      <ul className="nav navbar-nav menu-bar">
          
         
          <li><NavLink exact to="/">Home <span></span> <span></span>
                                 <span></span> <span></span></NavLink></li>
        
        <li><NavLink exact to="/competitions">Competitions </NavLink>
                
                <ul className="sub-menu">
                    <li><NavLink  exact to="/gallery1">gallery1 </NavLink></li>
                    <li><NavLink  exact to="/gallery2">gallery2 </NavLink></li>
                    <li><NavLink  exact to="/gallery3">gallery3 </NavLink></li>
                </ul>
         </li>
         <li><NavLink exact to="/matches">Matches <span></span> <span></span>
            <span></span> <span></span></NavLink></li>
            <li><NavLink exact to="/booktickets">Book Tickets <span></span> <span></span>
            <span></span> <span></span></NavLink></li>
            <li><NavLink exact to="/teams">Teams <span></span> <span></span>
            <span></span> <span></span></NavLink></li>
            <li><NavLink exact to="/contactus">Contact Us <span></span> <span></span>
            <span></span> <span></span></NavLink></li>
       
       
        </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="social">
                        <a className="facebook" href="https://www.facebook.com/templatespoint.net" > <i className="fa fa-facebook"></i></a>
                        <a className="twitter" href="https://twitter.com/itobuztech" > <i className="fa fa-twitter"></i></a>
                        <a className="behance" href="https://www.behance.net/" > <i className="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
  )
}

export default Header
