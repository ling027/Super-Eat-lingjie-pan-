import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the form
    console.log("Signing up with these details:", userDetails);
  };
  const handleLogInClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate("/login");
  };

  return (
    <div className="signupContainer">
      <div className="rightSide">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
          <input
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <label htmlFor="college">Choose your school</label>
          <select
            name="college"
            value={userDetails.college}
            onChange={handleChange}
            required
          >
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;