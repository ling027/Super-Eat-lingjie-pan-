import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Footer from "../../components/Footer/Footer"

function MenuButton({Children}){

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

return(
<div>

    <div className="promotion-sec">
        <h1 className="h1">Feed your krewe <br/> for just $25</h1><br/>
        <p className="p"><b>Louisiana flavor for the whole group chat. Get 12 pc Tenders, 4 Regular Sides, 4 Biscuits & 4 Small Drinks</b></p><br/>
        <MenuButton/>
    </div>

    <h1 className="h1">Try out our best dishes!</h1>

    <div className="promotion-container">
    
        <div className="BestDishes">
            <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328" />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasonings, hand battered and breaded in our buttermilk system, fried until golden brown. Sandwiched between two buttery toasted brioche buns, topped with our barrel cured pickle slices and classic mayo. Now add Bacon & Cheese to any sandwich.</p>
            <MenuButton/>
        </div>

        <div className="BestDishes">
        <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328"  />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasonings.</p>
            <MenuButton/>
        </div>

        <div className="BestDishes">
        <img className="Setting" src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1328" />
            <h1 className="h1">Classic Chicken</h1>
            <p className="p">A juicy chicken breast fillet marinated in Popeyes seasoning.</p>
            <MenuButton/>
        </div>

    </div>
    
    <br/>
    <Footer/>
   
</div>

);

}

export default LandingPage;