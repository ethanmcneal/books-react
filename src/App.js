import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Books from './Books'
import BookForm from './BookForm'


function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
   useEffect(() => {
     getBooks()
   }, [])

   const getBooks = async () => {
     try {
       let res = await axios.get ('https://fakerapi.it/api/v1/books?_quantity=5')
       setBooks(res.data.data)
     } catch (err) {
       alert('error')
     }
   }
   const addBook = (book) => {
     let idBook = {...book, isbn:Math.random(9)}
     setBooks([idBook, ...books])
   }
   
   const deleteBook = (isbn) => {
    let filterBooks = books.filter( book => book.isbn !== isbn)
    setBooks(filterBooks)
   }


return (
  <div>
    <h2>New Book Form</h2>
    <button onClick={() => setShowForm(!showForm)}> {showForm ? 'hide' : 'Show'} </button>
    {showForm && <BookForm addBook={addBook} />}
    <Books deleteBook={deleteBook} books = {books} />
  </div>
)
}
export default App;
