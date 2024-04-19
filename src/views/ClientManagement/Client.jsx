import { useState } from 'react'
import './Client.css'
import * as firebase from '../../../firebase/firebase'

function Client() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState("https://i.imgur.com/VsVoFJm.jpeg");

  const handleInputChange = (input, event) => {
    if(input == "title"){
      setTitle(event.target.value);
    }
    if(input == "price"){
      setPrice(event.target.value);
    }
    if(input == "description"){
      setDescription(event.target.value);
    }
    if(input == "imageuri"){
      setImageUri(event.target.value);
    }
  }
  
  const handleSubmit = () => {
    firebase.addANewMenuItem(title, price, description, imageUri);
    //firebase.addANewMenuItem("hot dog", 1.25, "lorem impsum food description", "https://i.imgur.com/VsVoFJm.jpeg");        
  }

  return (
      <div className = "Form">
        <p>Title</p>
        <input type="text" value={title} onChange={(event) => handleInputChange("title", event)}/>

        <p>Price</p>
        <input type="text" value={price} onChange={(event) => handleInputChange("price", event)}/>

        <p>Description</p>
        <input type="text" value={description} onChange={(event) => handleInputChange("description", event)}/>

        <p>ImageUri</p>
        <input type="text" value={imageUri} onChange={(event) => handleInputChange("imageuri", event)}/>
        <br/>
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default Client