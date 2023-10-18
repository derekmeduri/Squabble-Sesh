import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TOP_POSTS } from '../../utils/queries';
// import NewComment from '../Comment';

function TopPosts() {
  const { loading, error, data } = useQuery(QUERY_TOP_POSTS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Sort the posts by the number of comments in descending order
  const sortedPosts = data.posts.slice().sort((a, b) => b.comments.length - a.comments.length);
  console.log(sortedPosts);
  // Get the top 5 posts
  const top5Posts = sortedPosts.slice(0, 5);
  console.log(top5Posts);
  
  return (
    <div className='post-container'>
      {top5Posts.map(post => (
        <div key={post.id}>
          <h2 key={post.username} id='username'>{post.username}</h2>
          <p key= {post.postText} id='post-text'>{post.postText}</p>
          <p key={post.comments.length}></p>
          {/* <div className='comment-container'>
            <form>
              <NewComment/>
            </form>
          </div> */}
        </div>
      ))}
    </div>
  );
}
export default TopPosts;