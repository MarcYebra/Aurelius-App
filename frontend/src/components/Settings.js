import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'
import Account from './Account'

const Settings = () => {

  return (
    <div>
      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  )
}

export default Settings 