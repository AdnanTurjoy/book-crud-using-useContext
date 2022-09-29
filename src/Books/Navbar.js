import React, { useContext } from "react";
import { BookContext } from "./Books";

function Navbar(props) {
  const { books } = useContext(BookContext);
  // console.log(books.length);

  return (
    <div>
      <h1>Book List</h1>
      {books.length ? (
        <p>We have currently {books.length} books</p>
      ) : (
        <p style={{ color: "red" }}>You have to add some books</p>
      )}
    </div>
  );
}

export default Navbar;
