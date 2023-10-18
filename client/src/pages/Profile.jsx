import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfileHeader from '../components/Profile';
import UserPosts from '../components/UserPosts';
import axios from 'axios';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Post from '../components/Post/index';
import PostList from '../components/Profile';

// const queryUser = QUERY_USER;

// export default function Profile ({ userId }) {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`/profile/${userId}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`/posts/${userId}`);
//         setPosts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserProfile();
//     fetchUserPosts();
//   }, [userId]);

//   if (!user || !posts) {
//     return <div>Loading...</div>;
//   
const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, userParam ? QUERY_USERPOSTS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  const post = data?.me || data?.post || {};
  console.log(user);
  console.log(post);
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn()) {
    return (
      <div className="profile-page">
        <PostList user={user} />
        <Post Post={post} />
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

//   return (
//     <div className="profile-page">
//       <PostList user={user} />
//       <Post Post={Post} />
//     </div>
//   );
// };
};
export default Profile;