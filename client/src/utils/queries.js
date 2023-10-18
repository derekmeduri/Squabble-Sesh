import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUser {
    user {
      _id
      firstName
      username
    }
  }
`;

export const QUERY_USERPOSTS = gql`
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
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
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
  }
`;

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
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      username
      commentText
      createdAt
      post {
        _id
        username
        postText
        createdAt
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  query getSearchResults {
    posts
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      username
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
    }
  }
`;
