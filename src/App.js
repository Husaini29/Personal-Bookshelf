import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import "./App.css"

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />             
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
