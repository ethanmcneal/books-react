import React from 'react'

const Books = props => {
    const {books, deleteBook} = props
const renderBooks = () => {
return books.map(book => {
  return(
    <div>
      <h2>{book.title}</h2>
      <h3>By: {book.author}</h3>
      <p> ID: {book.isbn}</p>

    <button onClick={() => deleteBook(book.isbn)}>Delete book</button>
    </div>
  )
})  }

return( 
    <div>
        <h1>Books</h1>
        {renderBooks()}
    </div>
)}

export default Books

// honestly have no idea how this is rendering but I am not complaining