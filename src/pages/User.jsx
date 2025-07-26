import React from "react";
import { useParams } from "react-router-dom";
function Userpage() {
  const { name } = useParams();

  return <div>Welcome {name}, this is User Page</div>;
}
export default Userpage;
