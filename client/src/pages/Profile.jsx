import React, { useState, useEffect } from 'react';
import ProfileHeader from '../components/Profile';
import UserPosts from '../components/UserPosts';
import axios from 'axios';

export default function Profile ({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`/posts/${userId}`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
    fetchUserPosts();
  }, [userId]);

  if (!user || !posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <ProfileHeader user={user} />
      <UserPosts posts={posts} />
    </div>
  );
};