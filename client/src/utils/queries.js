import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($userId: ID!) {
  user(userId: $userId) {
    _id
    firstName
    username
    bio
    hotTake
  }
}`;

export const QUERY_USERPOSTS = gql`
  query getPosts($userId: ID!) {
    posts(userId: $posts) {
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

// export const QUERY_SINGLE_POST = gql`
//   query getSinglePost($postId: ID!) {
//     post(postId: $postId) {
//       _id
//       username
//       posttText
//       createdAt
//       comments {
//         _id
//         username
//         commentText
//         createdAt
//       }
//     }
//   }`;

export const QUERY_TOP_POSTS = gql`
  query getTopPosts($postId: ID!) {
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
  }`;

//    export const QUERY_COMMENTS = gql `
//    query getComments {
//      comments {
//        _id
//        username
//        commentText
//        createdAt
//        post {
//          _id
//          username
//          postText
//          createdAt
//        }
//      }
//  }`

//  export const SEARCH_QUERY = gql `
//  query getSearchResults {
//     posts
//  }
//  `