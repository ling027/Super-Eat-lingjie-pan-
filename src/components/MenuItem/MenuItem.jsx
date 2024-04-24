import { useState, useEffect } from 'react';
import './MenuItem.css';
import * as firebase from '../../../firebase/firebase';

function MenuItem() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        
        const fetchMenuItems = async () => {
            try {
                const items = await firebase.getMenuItems(); 
                setMenuList(items);
                console.log(items);
            } catch (error) {
                console.error('Failed to fetch menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    if (menuList.length === 0) {
        return <div>Loading menu items...</div>; // Render this while data is loading
    }

    function editMenuItem(index) {
        const updatedMenuList = menuList.map((item, i) => {
            if (i === index) {
                return { ...item, name: "Burger", price: "2.50", description: "Updated description" };
            }
            return item;
        });
        setMenuList(updatedMenuList);
    }

    const menuItemsDisplay = menuList.map((item, index) => (
        <div className="MenuList-Container" key={index}>
            <h1 className="MenuList-Header">{item.name}</h1>
            <p>Price: ${item.price}</p>
            <img className="MenuList-Image" src={item.imageuri} alt={item.name} />
            <p className="MenuList-Description">Description: {item.description}</p>
            <button className="MenuList-Btn" onClick={() => editMenuItem(index)}>Edit Item</button>
        </div>
    ));

    return (
        <div className="menu-wrapper">
            {menuItemsDisplay}
        </div>
    );
}

export default MenuItem;
