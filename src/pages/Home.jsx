import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function goToUserPage() {
    if (name) {
      navigate(`/user/${name}`);
    } else {
      alert("Please enter a name to proceed.");
    }
  }
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={goToUserPage}>Proceed</button>
    </>
  );
}
export default Homepage;
