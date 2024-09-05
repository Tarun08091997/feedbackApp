const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: [true, "Please provide the sender name"]
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: [true, "Please provide the recipient name"]
  },
  message: {
    type: String,
    required: [true, "Please provide the suggestion message"],
    trim: true
  },
  department: {
    type: String,
    required: [true, "Please provide the department"]
  },
  school: {
    type: String,
    required: [true, "Please provide the school"]
  },
  university: {
    type: String,
    default: "CT University"
  },
  response: [
    {
        message: {
            type: String,
            trim: true
          },
          date: {
            type: Date,
            default: new Date()
          }
    }
  ],
  seen: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("SuggestionModel", suggestionSchema);
