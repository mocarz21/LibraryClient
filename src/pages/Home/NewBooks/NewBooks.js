import { useBooks } from "../../../hooks/ApiHooks/useBooks"
import './NewBooks.scss'

export const NewBooks = () =>{

  const { loading, payload, refetch } = useBooks();

  if(loading) return 'is Loading'
  const books = payload.data.sort((a,b) => b.id-a.id)
  let newBooks = books.slice(0,6)
  
  console.log('books',books)
  return(
    <div className="container new-books-module">
      <div className="row">
        <div className="col-2">
          <h1>NOWOŚCI</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newBooks.map(book=> 
        <div className="col-12 offset-1 col-md-4 offset-md-0 ">
          <div className="card h-100" style={{width: "18rem"}}>
            <img src={ `./${book.id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{book.tytul}</h5>
              <p className="card-text">{book.opis}</p>
            </div>
            <div className="card-footer text-body-secondary">
              <a href="#" className="btn btn-primary">Więcj informacji</a>
            </div>
          </div>
        </div>)}
      </div>  
    </div>
  )
}