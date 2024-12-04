import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } else {
          setError('Failed to fetch user data');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>Profile</h2>
        <p>Full Name: {userData.fullName}</p>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
