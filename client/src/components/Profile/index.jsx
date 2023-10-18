import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

// function ProfileHeader ({ userId }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = QUERY_USER;
//         setUser(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserProfile();
//   }, [userId]);

  // if (Auth.loggedIn()) {
  //   return (
  //     <div>
  //       <h1>{Auth.getProfile().data.username}</h1>
  //       <h2> Bio </h2>
  //         <p key={user.bio}>{user.bio}</p>
  //       <h2> Hot Take! </h2>  
  //         <p key={user.hotTake}>{user.hotTake}</p>
  //     </div>
  //   );
  // }

  const PostList = ({
    posts,
    user,
  }) => {
    if (!posts) {
      return <h3>No posts Yet</h3>;
    }
  
    return (
      <div>
        <h3>{user.username}</h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {showUsername ? (
                  <Link
                    className="text-light"
                    to={`/profiles/${post.user}`}
                  >
                    {post.postAuthor} <br />
                    <span style={{ fontSize: '1rem' }}>
                      had this thought on {post.createdAt}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: '1rem' }}>
                      You had this thought on {post.createdAt}
                    </span>
                  </>
                )}
              </h4>
              <div className="card-body bg-light p-2">
                <p>{post.postText}</p>
              </div>
              {/* <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/thoughts/${thought._id}`}
              >
                Join the discussion on this thought.
              </Link> */}
            </div>
          ))}
      </div>
    );
  };
  

  // if (!user) {
  //   return <div>Loading...</div>;
  // } 
  // return (
  //   <div className="profile-header">
  //     <h1>{data.username}</h1>
  //     <h2> Bio </h2>
  //       <p>{data.bio}</p>
  //     <h2> Hot Take! </h2>  
  //       <p>{data.hotTake}</p>
  //   </div>
  // );
;

export default PostList;
