import { useState, useEffect } from 'react';
import './MenuItem.css';

function MenuItem() {
    const menuList = [
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
        { name: "HotDog", price: 1.50, imageuri: "https://i.imgur.com/zNVkZnn.jpeg", description: "HotDog Description" },
    ];

    function AddToCartHandler(index) {
        console.log("ADD TO CART HANDLER IN MENUITEM.JSX INDEX:" + index);
    }
    const headings = menuList.map((item, index) => (
        <div className="MenuList-Container" key={index}>
            <h1 className ="MenuList-Header">{item.name}</h1>
            <p>Price: ${item.price}</p>
            <p>Index: {index}</p>
            <img className="MenuList-Image" src={item.imageuri} alt={item.name} />
            <p className ="MenuList-Description">Description: {item.description}</p>
            <button className = "MenuList-Btn" onClick={() => AddToCartHandler(index)}>Add To Cart</button>
        </div>
    ));

    return (
        <div className="menu-wrapper">
            {headings}
        </div>
    );
}

export default MenuItem;
