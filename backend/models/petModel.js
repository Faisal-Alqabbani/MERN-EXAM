const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
    },
    petType: {
      type: String,
      required: true,
    },
    petDescription: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    skill1: String,
    skill2: String,
    skill3: String,
  },
  {
    timestamp: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
