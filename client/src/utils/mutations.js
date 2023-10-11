import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
    $lastName: String!
    $hottake: String!
    $bio: String!
    $email: String!
    $password: String!
    $fighterInput: [fighterInput]

  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      hottake: $hottake
      bio: $bio
      email: $email
      password: $password
      fighter: $fighterId

    ) {
      token
      user {
        _id
      }
    }
  }`;

export const NEW_POST = gql `
mutation newPost ($postId: ID!, $postText: String!) {
    newPost(postId: $postId, postText: $postText) {
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

// export const EDIT_POST = gql ``

// export const DELETE_POST = gql ``

export const NEW_COMMENT = gql `
mutation newComment ($commentId: ID!, $commentText: String!) {
  newComment(commentId: $commentId, commentText: $commentText) {
    _id
    username
    commentText
    createdAt
  }
}`;

// export const EDIT_COMMENT = gql ``

// export const DELETE_COMMENT = gql ``