# 📚 Library API

A simple **Node.js & MongoDB** API for managing books in a library.  
This API allows you to:
- **Add books** with stock quantity  
- **Retrieve all books**  
- **Check out a book** (only if copies are available)  
- **Return a book** (decrease checked-out count)  

---

## 🛠 Tech Stack
- **Node.js** (Express.js)
- **MongoDB** (Mongoose ORM)
- **Postman** (for API testing)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/Babaurch/library-api.git
cd library-api

---

### 2️⃣ Install Dependencies
npm install

---

### 3️⃣ Set Up Environment Variables
Create a .env file in the root folder and add your MongoDB connection string:

MONGO_URI=mongodb://localhost:27017/library 

PORT=3000

---

### 4️⃣ Start the Server
npm start

The server will run on http://localhost:3000

---

## Usage

Use Postman or any other API client to interact with the API.

---

#### 📌 API Endpoints
📖 Books


### ➕ Add a New Book

- **URL**: `api/v1/books`
- **Method**: `POST`
- **Body**:

  ```json
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "totalStock": 15
  }
  ```

- **Success Response**:

  - **Code**: `201 Created`
  - **Content**:

    ```json
    {
      "_id": "60c72b2f9b1d8c001c8e4e5b",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "totalStock": 15,
      "checkedOut": 0,
      "__v": 0
    }
    ```
---

### 📚 Get All Books

- **URL**: `api/v1/books`
- **Method**: `GET`
- **Success Response**:

  - **Code**: `200 OK`
  - **Content**:

    ```json
    [
      {
        "_id": "60c72b2f9b1d8c001c8e4e5b",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "totalStock": 15,
        "checkedOut": 0,
        "__v": 0
      }
    ]
    ```
    ---

  ### 📤 Check Out a Book

- **URL**: `api/v1/books/:id/checkout`
- **Method**: `POST`
- **Success Response**:

 - **Code**: `200 OK`
  - **Content**:

    ```json
    [
      {
         "message": "Book checked out successfully"
      }
    ]
    ```
    ---

### 🔄 Return a Book

- **URL**: `api/v1/books/:id/return`
- **Method**: `POST`
- **Success Response**:

 - **Code**: `200 OK`
  - **Content**:

    ```json
    [
      {
         "message": "Book returned successfully" 
      }
    ]
    ```
    ---

### 🧑‍💻 Contributing
Fork the repo
Create a new branch (git checkout -b feature-name)
Commit your changes (git commit -m "Add new feature")
Push the branch (git push origin feature-name)
Open a pull request

---

### 📜 License
This project is open-source and available under the MIT License.

