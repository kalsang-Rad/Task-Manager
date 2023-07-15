const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    date: {
      type: "string",
      pattern: "^\\d{2}-\\d{2}-\\d{4}$",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
