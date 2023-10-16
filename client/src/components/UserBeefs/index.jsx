// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserBeefs = ({ userId }) => {
//   const [commentedPosts, setCommentedPosts] = useState([]);

//   useEffect(() => {
//     const fetchCommentedPosts = async () => {
//       try {
//         const response = await axios.get(`/api/posts/user-comments/${userId}`);
//         setCommentedPosts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCommentedPosts();
//   }, [userId]);

//   return (
//     <div className="commented-posts">
//       <h2>Posts Commented By User</h2>
//       <ul>
//         {commentedPosts.map(post => (
//           <li key={post._id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserBeefs;