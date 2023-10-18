// import { Link } from 'react-router-dom';

// import { useQuery } from '@apollo/client';
// import { USER_POSTS } from '../utils/queries';

// function Profile() {
//   const { data } = useQuery(USER_POSTS);
//   let user;

//   if (data) {
//     user = data.user;
//   }
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


// };

// export default Profile;