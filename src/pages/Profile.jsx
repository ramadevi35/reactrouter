import React from "react";
import { useParams } from "react-router-dom";
function Profile() {
  const { name } = useParams();

  return <div>Welcome {name}, this is your Profile Page</div>;
}
export default Profile;
