import React from 'react'

const Account = () => {

  const handleDeleteAccount = () => {

    if (window.confirm('Are you sure you want to delete your account?')) {
      fetch('/api/delete_account', {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          alert('Account has been successfully deleted.')
          window.location.href = '/'
        } else {
          alert('Failed to delete account, please try again later.')
        }
      })
    }
  }


return (
  <div className='account-container'>
    <div className='account-box'>
      <h2>Account</h2>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  </div>
)
}

export default Account