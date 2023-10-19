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
mutation newPost ( $postText: String!) {
    newPost( postText: $postText) {
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

// export const EDIT_POST = gql `
// mutation ($id: Int, $is_completed: Boolean, $postText: String) {
//   updatePost(where: {id: {_eq: $id}}, _set: {is_completed: $is_completed, postText: $postText}) {
//     affected_rows
//     returning {
//       id
//       postText
//       is_completed
//     }
//   }
// }`

export const DELETE_POST = gql `
mutation($id: Int) {
  removePost(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      postId
    }
  }
}`

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