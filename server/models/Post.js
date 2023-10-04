const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
