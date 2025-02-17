import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    totalStock: Number,
    checkedOut: { type: Number, default: 0 },
  },{
    timestamps: true,
    toJSON: {virtuals: true},
  }

);
  
  const Book = mongoose.model("Book", bookSchema);
  export default Book;