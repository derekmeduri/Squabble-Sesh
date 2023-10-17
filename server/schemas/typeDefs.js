const typeDefs = `


  type Auth {
    token: ID!
   user: User
  }

  type User {
    _id: ID
    firstName: String
    username: String
    email: String
    password: String
    hotTake: String
    bio: String
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type PostInput {
    postText: String!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String

  }

  type CommentInput {
    commentText: String!
  }

  type Query {
    users: [User]
    user(username: String): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    comments(username: ID!): [Comment]
    comment(commentId: ID!): Comment
   
    
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
   
  }

  type Mutation {

    addUser(username: String!, firstName: String!,  hotTake: String!, bio: String!, email: String!, password: String!, ): Auth
    login(username: String!, password: String!): Auth
    addPost(postInput: PostInput!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    removeUser(_id: ID!): Post


    
  }
`;

module.exports = typeDefs;
