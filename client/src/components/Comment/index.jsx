import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../../utils/queries';

function NewComment() {
  const { loading, error, data } = useQuery(QUERY_COMMENTS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="comment">
      <strong>{user}</strong>: {text} <span className="comment-date">{formattedDate}</span>
    </div>
  );
  }

export default NewComment;