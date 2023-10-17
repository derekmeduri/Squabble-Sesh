import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
   
    $hotTake: String!
    $bio: String!
    $email: String!
    $password: String!
  

  ) {
    addUser(
      username: $username
      firstName: $firstName
      
      hotTake: $hotTake
      bio: $bio
      email: $email
      password: $password
      

    ) {
      token
      user{
        _id
      }
    }
    }
  `;

export const NEW_POST = gql `
mutation addPost($postInput: PostInput!) {
    addPost(postInput: $postInput) {
        _id
        postText
        createdAt
        postAuthor {
          id
          username
        }

    }
}`;

// export const EDIT_POST = gql ``

// export const DELETE_POST = gql ``

export const NEW_COMMENT = gql `
mutation addComment ($commentId: ID!, $commentText: String!) {
  addComment(commentId: $commentId, commentText: $commentText) {
    _id
    commentAuthor
    commentText
    createdAt
  }
}`;

// export const EDIT_COMMENT = gql ``

// export const DELETE_COMMENT = gql ``