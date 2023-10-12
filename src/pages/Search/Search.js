import { SearchInput } from '../../modules/SearchInput/SearchInput'
import { useBooks } from '../../hooks/ApiHooks/useBooks'
import { useState, useEffect } from 'react'
import './Search.scss'

export const Search = () => {
  const {loading, payload} = useBooks()
  const [books, setBooks ] = useState()

  useEffect(() => {
    if(payload && payload.data) {
        setBooks(payload.data);
    }
  }, [payload]);

  if(loading) return <>'loading...'</>

  const descriptionSnippet =  (book) => {
    const snippet = book.slice(0,25)
    return book ? snippet + '...' : ' ' 
  }

  const recordData = () =>{

  }
  return(
    <div className='search-module'>
      <h1>Wyszukaj</h1>
      <SearchInput action={setBooks}/>
      <div>
        <h4>Wyniki Wyszukiwania:</h4>
      </div>
      <div className='row data-info'> 
          <div className='col'>
            <p>Tytuł</p>
          </div>
          <div className='col'>
            <p>Autor</p>
          </div>
          <div className='col'>
            <p>Opis</p>
          </div>
          <div className='col'>
            <p>Podgląd</p>
          </div>
      </div>
      {books?.map(book=> <div key={book.id}className='row person-data'>
        <div className='col'>
          <p>{book.tytul}</p>
        </div>
        <div className='col'>
          <p>{book.autor}</p>
        </div>
        <div className='col'>
          <p>{descriptionSnippet(book.opis)}</p>
        </div>
        <div className='col'>
          <button onClick={()=>recordData(book.id)}>Podgląd/Edycja</button>
        </div>
      </div>)}
    </div>
  )
}