import Book from "../model/BookSchema.js";

// Add a new book
export const addBook = async (req, res) => {
    try {
        const { title, author, totalStock } = req.body;
        if (!title || !author || !totalStock) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const book = new Book({ title, author, totalStock, checkedOut: 0 });
        await book.save();
        console.log("Book added successfully:", book);
        res.status(201).json(book);
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get all books
export const getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
}

// Check out a book
export const checkoutBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    if (book.checkedOut >= book.totalStock) {
        return res.status(400).json({ error: "No copies available" });
    }
    book.checkedOut += 1;
    await book.save();
    res.json(book);
}

// Return a book
export const returnBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    if (book.checkedOut > 0) {
        book.checkedOut -= 1;
        await book.save();
    }
    res.json(book);
}


