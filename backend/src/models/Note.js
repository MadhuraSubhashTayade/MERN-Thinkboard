import mongoose from "mongoose";

// 1. create a schema object
// 2. create a model based on that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // default createdAt and updatedAt provided with this flag
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
