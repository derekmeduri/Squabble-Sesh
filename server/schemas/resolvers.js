const { User, Squabble } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("squabbles");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("squabbles");
    },
    squabbles: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Squabble.find(params).sort({ createdAt: -1 });
    },
    squabble: async (parent, { squabbleId }) => {
      return Squabble.findOne({ _id: squabbleId });
    },
    // we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("squabbles");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, username, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    addSquabble: async (parent, { squabbleText }, context) => {
      if (context.user) {
        const squabble = await Thought.create({
          squabbleText,
          squabbleAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { squabble: squabble._id } }
        );

        return squabble;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { squabbleId, commentText }, context) => {
      if (context.user) {
        return Squabble.findOneAndUpdate(
          { _id: squabbleId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeSquabble: async (parent, { squabbleId }, context) => {
      if (context.user) {
        const squabble = await Squabble.findOneAndDelete({
          _id: squabbleId,
          squabbleAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { squabbles: squabble._id } }
        );

        return squabble;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { squabbleId, commentId }, context) => {
      if (context.user) {
        return Squabble.findOneAndUpdate(
          { _id: squabbleId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
