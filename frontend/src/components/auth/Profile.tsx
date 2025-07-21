import React from "react";
import { useNavigate } from "react-router-dom";
import {getCurrentUser} from "../../services/auth.service";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = getCurrentUser()

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="formContainer">
      <h2>Profile</h2>
      <div>
        <strong>Email:</strong> {token!.rut || "Unknown"}
      </div>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
