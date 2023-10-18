const db = require("./connection");
const { User, Post } = require("../models");
const squabbleDB = require("./squabbleDB");

db.once("open", async () => {
  await Post.create({
    postText: "the yankees are no good",
    postAuthor: "derekforeal",
    comments: [
      {
        commentText: "yes they are",
        commentAuthor: "pinky",
      },
    ],
  });
  await Post.create({
    postText: "the brain will ruin my plans to take over the world",
    postAuthor: "pinky",
    comments: [
      {
        commentText: "the brain is smarter",
        commentAuthor: "derekforeal",
      },
    ],
  });
  await Post.create({
    postText: "lamb and tuna fish",
    postAuthor: "derekforeal",

    comments: [
      {
        commentText: "spaghetti and meatballs",
        commentAuthor: "pinky",
      },
    ],
  });
  await Post.create({
    postText: "twitter is the best social media app",
    postAuthor: "pinky",
    comments: [
      {
        commentText: "squabble sesh rules",
        commentAuthor: "derekforeal",
      },
    ],
  });
  await Post.create({
    postText: "earth is flat",
    postAuthor: "derekforeal",
    comments: [
      {
        commentText: "earth is round",
        commentAuthor: "pinky",
      },
    ],
  });
  console.log("posts seeded");

  process.exit();
});
