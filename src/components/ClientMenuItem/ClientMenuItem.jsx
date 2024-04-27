import { useState, useEffect } from 'react';
import './ClientMenuItem.css';
import * as firebase from '../../../firebase/firebase';

function ClientMenuItem() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetchMenuItems(); 
    }, []);

    const fetchMenuItems = async () => {
        try {
            const items = await firebase.getMenuItems(); 
            setMenuList(items);
            console.log(items);
        } catch (error) {
            console.error('Failed to fetch menu items:', error);
        }
    };

    function editMenuItem(index) {
        const updatedMenuList = menuList.map((item, i) => {
            if (i === index) {
                return { ...item, name: "Burger", price: "2.50", description: "Updated description" };
            }
            return item;
        });
        setMenuList(updatedMenuList);
    }

    async function handleDelete(item) {
        try {
            await firebase.deleteMenuItem("menuItem", item.id);
            fetchMenuItems(); // Re-fetch the menu items to update the list after deletion
        } catch (error) {
            console.error('Error deleting menu item:', error);
        }
    }

    if (menuList.length === 0) {
        return <div>Loading menu items...</div>; // Render this while data is loading
    }

    const menuItemsDisplay = menuList.map((item, index) => (
        <div className="MenuList-Container" key={index}>
            <h1 className="MenuList-Header">{item.name}</h1>
            <p>Price: ${item.price}</p>
            <img className="MenuList-Image" src={item.imageuri} alt={item.name} />
            <p className="MenuList-Description">Description: {item.description}</p>
            <button className="MenuList-Btn" onClick={() => editMenuItem(index)}>Edit Item</button>
            <br/>
            <br/>
            <button type="submit" onClick={() => handleDelete(item)}>Delete Item</button>
        </div>
    ));

    return (
        <div className = "MenuItemContainer">
            <h1>Menu Item ClientSide</h1>
            <div className="menu-wrapper">
                {menuItemsDisplay}
            </div>
        </div>
    );
}

export default ClientMenuItem;
