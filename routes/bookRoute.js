import express from "express";
import { addBook, getBooks, checkoutBook, returnBook } from "../controller/bookController.js";

const bookRoute = express.Router();

// Add a new book
bookRoute.post("/books", addBook)

// Get all books
bookRoute.get("/books", getBooks)

// Check out a book
bookRoute.post("/books/:id/checkout", checkoutBook)

// Return a book
bookRoute.post("/books/:id/return", returnBook)

export default bookRoute;