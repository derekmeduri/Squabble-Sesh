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

  type Squabble {
    _id: ID
    squabbleText: String
    squabbleAuthor: String
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
    user: [User]!
    squabble(squabbleId: ID!): Squabble 
    me: User
    
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
   
  }

  type Mutation {

    addUser(username: String!, firstName: String!, lastName: String!, hottake: String!, bio: String!, email: String!, password: String!, ): Auth
    login(email: String!, password: String!): Auth
    addSquabble(squabbleText: String!): Squabble
    addComment(squabbleId: ID!, commentText: String!): Squabble
    removeSquabble(squabbleId: ID!): Squabble
    removeComment(squabbleId: ID!, commentId: ID!): Squabble


    
  }
`;

module.exports = typeDefs;
