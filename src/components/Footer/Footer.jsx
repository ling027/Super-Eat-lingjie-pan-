import React from "react";
import './Footer.css'
import { useNavigate } from "react-router-dom";


function Footer(){

const navigate = useNavigate();

const handleLogoClick = () => {
   navigate("/");
}

const handleMenuClick = () => {
    navigate("/MenuItem");
 }
const handleLoginClick = () => {
    navigate("/Login");
 }

 const handleSignUpClick = () => {
    navigate("/signup");
 }

 const handleContactClick=()=>{
    navigate("/contactus")
  }

  const handleReservationClick=()=>{
    navigate("/reservation")
  }

return(
        <div>
            
            <div>
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.360389819756!2d-73.95184732409172!3d40.82004707137755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6657fa896f5%3A0xa785a9c0ac09561a!2sThe%20City%20College%20of%20New%20York!5e0!3m2!1sen!2sus!4v1714423329291!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>

                <div className="footer">
                    <span>
                        <a onClick={handleLogoClick}>Home |   </a>
                        <a onClick={handleMenuClick}>Menu | </a>
                        <a onClick={handleLoginClick}>Login   |   </a>
                        <a onClick={handleSignUpClick}>Sign Up  |  </a>
                        <a onClick={handleContactClick}>Contact Us  |</a>
                        <a onClick={handleReservationClick}>Reservation</a>
                    </span>
                </div>
            </div>
        </div>
)


}

export default Footer;