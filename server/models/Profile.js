const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// const FighterImage = new Schema({
//     fighter1: { url: '../../client/assets/fighter/bilbo', alt: 'Bilbo' },
//     fighter2: { url: './assets/fighter/donkey', alt: 'DonkeyKong' },
//     fighter3: { url: './assets/fighter/dragon', alt: 'DragonballZ' },
//     fighter4: { url: './assets/fighter/tim', alt: 'TimRobinson'} ,
//     fighter5: { url: './assets/fighter/worf', alt: 'WorfStarTrek' },
//     fighter6: { url: './assets/fighter/images', alt: 'DarthVader' },
// });

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  friends: {
    type: Array,
    default: [],
  },
  hotTakes: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
//   fighterInput: {
//     //type: Image,
//     //image: [FighterImage],
//     required: true,
//   },

});

// set up pre-save middleware to create password
profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model("Profile", profileSchema);

module.exports = Profile;
