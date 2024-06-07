import React, { useState, useRef } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  console.log(books)

  const fetchBooks = async (searchQuery) => {
    if (!searchQuery) {
      setBooks([]);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`https://openlibrary.org/search.json`, {
        params: { q: searchQuery, limit: 10, page: 1 }
      });
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Something went wrong: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      fetchBooks(value);
    }, 500);
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books"
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className='book-card-container'>
          {books.map((book) => (
            <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} route={"search"}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
