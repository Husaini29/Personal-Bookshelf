import React from 'react';

const BookCard = ({ book, addToBookshelf,route }) => {
  const title = book.title || 'No Title';
  const author = book.author_name ? book.author_name.join(', ') : 'No Author';
  const cover_id = book.cover_i;
  const edition_count = book.edition_count;

  console.log(book)

  return (
    <div className='book-card'>
        <div> <b>Book title - </b> {title}</div>    
        <div> <b>Edition Count - </b> {edition_count}</div>
      {route === "search" && <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>}
    </div>
  );
};

export default BookCard;
