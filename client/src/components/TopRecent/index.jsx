import React from 'react';
import { useQuery } from '@apollo/react-hooks';


function TopPosts() {
    const { loading, error, data } = useQuery(QUERY_TOP_POSTS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        {data.TopPosts.map(post => (
          <div key={post.id}>
            <h2>{post.username}</h2>
            <p>{post.postText}</p>
            <p>Number of Comments: {post.comments.length}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default TopPosts;