import { useBooks } from "../../../hooks/ApiHooks/useBooks"
import FormDialog from '../../../modules/PopUp/PopUp';
import { useState } from "react";
import { useImg } from "../../../hooks/ApiHooks/useImg"

import './NewBooks.scss'

export const NewBooks = () =>{

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [bookId, setBookId] = useState()
  const { loading, payload, refetch } = useBooks();
  const { images, loading: loadingImg } = useImg()

  if( loading || loadingImg ) return 'is Loading'
  const books = payload.data.sort((a,b) => b.id-a.id)
  let newBooks = books.slice(0,6)

  const handleCloseDialog =() =>{
    setDialogOpen(false)
  }

  const openPopup = (bookId) =>{
    setBookId(bookId)
    setDialogOpen(true)
  }

  return(
    <div className="container new-books-module">
      <div className="row">
        <div className="col-2">
          <h1>NOWOŚCI</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newBooks.map(book=> 
        <div key={book.id} className="col-12 offset-1 col-md-4 offset-md-0 ">
          <div className="card h-100" style={{width: "18rem"}}>
            <img src={ images[book.nazwa_Img]} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{book.tytul}</h5>
              <p className="card-text">{book.opis}</p>
            </div>
            <div className="card-footer text-body-secondary">
              <a  className="btn btn-primary" onClick={()=>openPopup(book.id)}>Więcj informacji</a>
            </div>
          </div>
        </div>)}
      </div>
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} use={"book"} bookId={bookId}/>  
    </div>
  )
}