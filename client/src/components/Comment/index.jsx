import React from 'react';

const Comment = ({ user, text, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="comment">
      <strong>{user}</strong>: {text} <span className="comment-date">{formattedDate}</span>
    </div>
  );
};

export default Comment;