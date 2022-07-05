import axios from 'axios'
import { useEffect, useState } from 'react'
import Book from '../../components/Book'

const Home = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    async function handleGetBooks() {
      axios
      .get('http://localhost:3333/books')
      .then((response) => setBooks(response.data))
      .catch(() => alert('Desculpe, houve um erro ao tentar recuperar os livros.'))
    }
    
    handleGetBooks()
  }, [])

  return (
    <div className='container'>
      <div className='container-books'>
        {books.map(book => (
          <Book key={book.id} item={book}/>
        ))}
      </div>
    </div>
  )
}

export default Home