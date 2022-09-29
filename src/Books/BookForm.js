import React, { useContext, useState } from "react";
import { BookContext } from "./Books";

function BookForm(props) {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  console.log(addBook);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""> Title: </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor=""> Author: </label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
