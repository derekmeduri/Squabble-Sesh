import { gql } from '@apollo/client';

export const QUERY_POST = gql`
  query getPosts {
    posts {
      _id
      username
      postText
      createdAt
      comments {
        _id
        username
        commentText
        createdAt
      }
    }
  }`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      username
      posttText
      createdAt
      comments {
        _id
        username
        commentText
        createdAt
      }
    }
  }`;

export const QUERY_TOP_POSTS = gql`
  query getTopPosts {
    posts {
        _id
        username
        postText
        createdAt
        comments {
            _id
            commentText
            createdAt
        }
    }
  }
`