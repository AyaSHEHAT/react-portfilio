import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo-blue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons' ;
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons' ;
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons' ;
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' ;
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons' ;

const Footer = ()=>{
    return(
        <div className="footer">
            <footer className="footer  p-5">
                <section className="container">
                     <div className="row">
                         <div className="col-md-3 col-sm-6 mb-2 pr-3 text-center ">
                            <a href="#">
                                <img src={logo} className="logo"  alt="logo"/>
                            </a>
                            </div>
                            <div className="col-md-3 pb-1 col-sm-6 text-center footerpages">
                                <h6 className="footer-h6">Pages : </h6>
                                <ul>
                                    <li> <a href="#home">Home </a></li>
                                    <li> <a href="#indexAbout">About</a></li>
                                    <li> <a href="#services">Services</a></li>
                                    <li> <a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 pb-1 col-sm-6 text-center contact">
                                <h6 className="footer-h6" id="contact">Contact Us : </h6>
                                <div>
                                     <p><FontAwesomeIcon icon={faMapMarkerAlt} style={ { color:"#fff" , fontSize:"1rem"} } />  cairo egypt</p> 
                                    <p><FontAwesomeIcon icon={faEnvelope} style={ { color:"#fff" , fontSize:"1rem"} } />  username@mail.com</p> 
                                    <p><FontAwesomeIcon icon={faPhone} style={ { color:"#fff" , fontSize:"1em"}} />  +20123456789 </p>
                                </div>
                            </div>

                                
                            <div className="col-md-3 col-sm-6 text-center  followUs">
                                <h6 className="footer-h6">Follow Us : </h6>
                                <ul className="followUs">
                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color:"#fff" , fontSize:"1.5em"  } }  className='fontawesome'/></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} style={ { color:"#fff" , fontSize:"1.5em" } }  className='fontawesome'/></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagramSquare} style={ { color:"#fff" , fontSize:"1.5em" } } className='fontawesome' /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} style={ { color:"#fff" , fontSize:"1.5em" } } className='fontawesome' /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGithubSquare} style={ { color:"#fff" , fontSize:"1.5em" } }  className='fontawesome'/></a></li>
                                    
                                    </ul> 
                            </div>
                        </div>
                    </section> 
                </footer>
           </div>
    )
}
export default Footer