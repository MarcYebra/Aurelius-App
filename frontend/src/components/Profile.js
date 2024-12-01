import React from 'react'

const Profile = () => {

  const userData = {
    fullName: 'Marc Yebra',
    preferredName: 'Marc',
    email: 'marc@example.com'
  }

  return (
    <div className='profile-container'>
      <div className='profile-box'>
        <h2>Profile</h2>
        <p>
          Full Name: {userData.fullName}
        </p>
        <p>
          Email:{userData.email}
        </p>
      </div>
    </div>
  )
}

export default Profile 