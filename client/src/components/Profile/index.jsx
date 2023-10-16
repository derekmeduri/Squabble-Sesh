import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileHeader ({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-header">
      <h1>{user.username}</h1>
      {/* <img src={user.fighter}></img> */}
      <h2> Bio </h2>
        <p>{user.bio}</p>
      <h2> Hot Take! </h2>  
        <p>{user.hotTake}</p>
    </div>
  );
};

export default ProfileHeader;
