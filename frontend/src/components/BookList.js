import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/books/${book._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
