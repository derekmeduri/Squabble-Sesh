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
    username: String
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }



  type Comment {
    _id: ID
    username: String
    commentText: String
    commentAuthor: String
    createdAt: String

  }



  type Query {
    users: [User]
    user(username: String): User
    posts(username: String): [Post]
    post(postId: ID!): Post

   
    
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
   
  }

  type Mutation {

    addUser(username: String!, firstName: String!,  hotTake: String!, bio: String!, email: String!, password: String!, ): Auth
    login(username: String!, password: String!): Auth
    newPost( postText: String!): Post
    newComment(postId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Comment
    removeUser(_id: ID!): User


    
  }
`;

module.exports = typeDefs;
