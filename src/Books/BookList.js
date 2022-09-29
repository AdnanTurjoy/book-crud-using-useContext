import React, { useContext } from "react";
import { BookContext } from "./Books";
import Book from "./Book";

function BookList(props) {
  const { books } = useContext(BookContext);
  return (
    <div className="book-list">
      {books.map((book, id) => {
        return <Book key={id} book={book} />;
      })}
    </div>
  );
}

export default BookList;
