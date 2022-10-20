const mongoose = require("mongoose");

const countSchema = mongoose.Schema(
  {
    text: {
      type: Number,
      required: [true, "Add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("count", countSchema);
