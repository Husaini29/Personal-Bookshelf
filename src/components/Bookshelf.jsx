import React from 'react';
import BookCard from './BookCard';

const Bookshelf = () => {

    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className='book-card-container'>
        {savedBookshelf?.map((book, index) => (
          <BookCard key={index} book={book} route="shelf"/>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
