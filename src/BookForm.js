import React, {useState} from 'react'


const BookForm = (props) => {
    const {addBook} = props
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
        addBook({title: title , author:author})
        setTitle('')
        setAuthor('')
    }
    return (
        <div>
        <h1>New Book</h1>
        <form onSubmit={handleSubmit}>
        <p>book title</p>
        <input
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
        />
        <p>author</p>
        <input
            value={author}
            onChange={(e)=>{setAuthor(e.target.value)}}
        />
        <button type='submit'>Add Book</button>

    </form>
        
        </div>
    )
}

export default BookForm