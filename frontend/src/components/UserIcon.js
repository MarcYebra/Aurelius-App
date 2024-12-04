import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option == "Account") {
      navigate("/settings/account")
    } else if (option == "My Profile") {
      navigate('/settings/profile')
    } else if (option == 'Logout') {
      navigate('/')
    }
    setIsOpen(false)
  };

  return (
    <div className="user-account-container">
      <div className="user-circle" onClick={toggleDropdown}>
        MY
      </div>

      {isOpen && (
        <div className="user-dropdown">
          <div
            className="user-dropdown-item"
            onClick={() => handleOptionClick("My Profile")}
          >
            Profile
          </div>

          <div
            className="user-dropdown-item"
            onClick={() => handleOptionClick("Account")}
          >
            Account
          </div>

          <div
            className="user-dropdown-item"
            onClick={() => handleOptionClick("Logout")}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIcon;