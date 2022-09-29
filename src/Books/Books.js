import React, { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Navbar from "./Navbar";
export const BookContext = React.createContext();

function Books() {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "XYZ", id: 1 },
    { title: "The Final empire", author: "Brandan sanderson", id: 2 },
  ]);
  const addBook = (title, author) => {
    const newBook = {
      title: title,
      author: author,
      id: new Date().getTime().toString(),
    };
    setBooks([...books, newBook]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div>
      <BookContext.Provider value={{ books, addBook, removeBook }}>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContext.Provider>
    </div>
  );
}

export default Books;
