import React from 'react';
import { useQuery } from '@apollo/react-hooks';


function TopPosts() {
  const { loading, error, data } = useQuery(QUERY_TOP_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Sort the posts by the number of comments in descending order
  const sortedPosts = data.TopPosts.slice().sort((a, b) => b.comments.length - a.comments.length);
  // Get the top 5 posts
  const top5Posts = sortedPosts.slice(0, 5);
  return (
    <div>
      {top5Posts.map(post => (
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