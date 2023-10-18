import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TOP_POSTS, QUERY_SINGLE_POST } from '../../utils/queries';
// import NewComment from '../Comment';

function TopPosts() {
  const { loading, error, data } = useQuery(QUERY_TOP_POSTS, QUERY_SINGLE_POST);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Sort the posts by the number of comments in descending order
  const sortedPosts = data.posts.slice().sort((a, b) => b.comments.length - a.comments.length);
  console.log(sortedPosts);
  // Get the top 5 posts
  const top5Posts = sortedPosts.slice(0, 5);
  console.log(top5Posts);

  const handleDelete = (postId) => {
    // Create a new array without the item to delete
    const updatedPost = post.filter(post => post.id !== postId);
    // Update the state with the new array of items
    setPost(updatedPost);
  
  return (
    <div className='post-container'>
      {top5Posts.map(post => (
        <div key={post.id}>
          <h2 key={post.username} id='username'>{post.username}</h2>
          <p key= {post.postText} id='post-text'>{post.postText}</p>
          <p key={post.comments.length}></p>
          <div key= {post.id} id ="delete" className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" onClick={() => handleDelete(post._id)} type="delete">
                Delete Post
              </button>
            </div>
        </div>
      ))}
    </div>
  );
}
}
export default TopPosts;