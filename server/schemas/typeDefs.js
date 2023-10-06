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

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    postsWithMostComments: [Post]
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, hottake: String!, bio: String!, email: String!, password: String!, ): Auth
    login(email: String!, password: String!): Auth

    
  }
`;

module.exports = typeDefs;
