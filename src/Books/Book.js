import React, { useContext } from "react";
import { BookContext } from "./Books";

function Book({ book }) {
  const { removeBook } = useContext(BookContext);
  return (
    <div className="book">
      <li
        onClick={() => {
          removeBook(book.id);
        }}
      >
        <p style={{ fontWeight: "bold" }}>Title: {book.title}</p>
        <p>Author: {book.author}</p>
      </li>
    </div>
  );
}

export default Book;
