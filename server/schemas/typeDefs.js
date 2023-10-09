const typeDefs = `
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type FighterImage {
    url: String! 
    alt: String!
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    friends: String
    hotTakes: String
    bio: String
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String

  }


  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(thoughtId: ID!): Post
   
    
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
   
  }

  type Mutation {

    addUser(username: String!, firstName: String!, lastName: String!, hottake: String!, bio: String!, email: String!, password: String!, ): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    removeUser(_id: ID!): Post


    
  }
`;

module.exports = typeDefs;
