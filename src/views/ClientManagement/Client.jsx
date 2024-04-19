import { useState, useEffect } from 'react';
import './Client.css';
import * as firebase from '../../../firebase/firebase';

function Client() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    // You can perform any additional actions here when imageUri changes,
    // such as uploading the image to Firebase storage.
    console.log(imageUri);
  }, [imageUri]);

  const handleInputChange = (input, event) => {
    if (input === 'title') {
      setTitle(event.target.value);
    } else if (input === 'price') {
      setPrice(event.target.value);
    } else if (input === 'description') {
      setDescription(event.target.value);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUri(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    firebase.addANewMenuItem(title, price, description, imageUri);
  };

  return (
    <div className="Form">
      <p>Title</p>
      <input type="text" value={title} onChange={(event) => handleInputChange('title', event)} />

      <p>Price</p>
      <input type="text" value={price} onChange={(event) => handleInputChange('price', event)} />

      <p>Description</p>
      <input type="text" value={description} onChange={(event) => handleInputChange('description', event)} />

      <p>Image</p>
      <input type="file" className = "DragDrop-container" onChange={handleImageUpload} />
      <br/>
      <br/>
      {imageUri && <img src={imageUri} alt="Uploaded" style={{ maxWidth: '200px' }} />}

      <br/>
      <br/>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Client;
