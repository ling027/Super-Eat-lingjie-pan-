import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function MenuButton(){
const navigate = useNavigate();

const handleMenuClick = () => {
    navigate("/MenuItem");
 }
 return(
        <button onClick={handleMenuClick} className="Button">
          Check it out!
        </button>
)
};

function LandingPage(){

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

return(
<div>
    <div className="nav">
        <h1 onClick={handleLogoClick}>Super Eat</h1>
    </div>

    <div className="promotion-sec">
        <h1 className="h1">Feed your krewe <br/> for just $25</h1>
        <p className="p"><b>Louisiana flavor for the whole group chat. Get 12 pc Tenders, 4 Regular Sides, 4 Biscuits & 4 Small Drinks</b></p>
        <MenuButton/>
    </div>

    <h1 className="h1">Try out our best dishes!</h1>

    <div className="promotion-container" style={{display:"flex", justifyContent:"center", flexGrow:"1"}} >
    
        <div className="BestDishes-1">
            <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328" />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
            <MenuButton/>
        </div>

        <div className="BestDishes-2">
        <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328"  />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasonings.</p>
            <MenuButton/>
        </div>

        <div className="BestDishes-3">
        <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328" />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasoning.</p>
            <MenuButton/>
        </div>

    </div>

    <br/>

    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.360389819756!2d-73.95184732409172!3d40.82004707137755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6657fa896f5%3A0xa785a9c0ac09561a!2sThe%20City%20College%20of%20New%20York!5e0!3m2!1sen!2sus!4v1714423329291!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>

    <div className="footer">
    <span>
      <a onClick={handleLogoClick}>Home |   </a>
      <a onClick={handleMenuClick}>Menu | </a>
      <a onClick={handleLoginClick}>Login   |   </a>
      <a onClick={handleSignUpClick}>Sign Up</a>
      </span>
      
      
    </div>

   
</div>

);

}

export default LandingPage;