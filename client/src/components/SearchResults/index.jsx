import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map(post => (
        <div key={post._id} className="search-result">
          <h2>{post.username}</h2>
          <p>{post.text}</p>
          <p>[{post.comment}]</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
