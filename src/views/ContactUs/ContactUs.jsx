import React from "react";
import "./ContactUs.css";
import Footer from "../../components/Footer/Footer"
import { Header } from "../Reservation/Reservation";




function ContactUs(){
return(
        <div>
            <Header Children="Contact Us"/><br/>

            <div className="container">

            <div className="infor-section">
                    <p><b>Address:</b> 160 Convent Ave, New York, NY 10031</p>
                    <p><b>Phone Number:</b> (917)677-6783</p>
                    <p><b>Email:</b>jackei@citymail.cuny.edu</p>
                    <p><b>Hours:</b>Mon-Fri:12:00PM to 10:00PM, Sat-Sun:11:00AM to 9:00PM</p>
                </div>
            
            <div> 
                <form action="https://api.web3forms.com/submit" method="POST" className="enter-section" >
                    <input type="hidden" name="access_key" value="a2efa853-d079-44a2-bdf6-bd4cdd803d0c"/>
                    <lable htmlFor="Name">Name</lable>
                    <input type="text" name="Name" placeholder="Your Name" className="Input" required/>
                    <lable htmlFor="Email">Email</lable>
                    <input type="email" name="Email" placeholder="Your Email" className="Input" required/>
                    <lable htmlFor="Message">Message</lable>
                    <textarea name="Message" placeholder="Give us your thought!" className="Input" required/>  
                    <button className="sub-button" type="submit">Submit</button>
                </form>
               
            </div>
               

            </div><br/>
       
        <Footer/>

        </div>
)


}

export default ContactUs;