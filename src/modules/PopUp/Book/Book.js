import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useBooks } from '../../../hooks/ApiHooks/useBooks';
import { useUser } from '../../../hooks/ApiHooks/useUsers';
import { useRentals } from '../../../hooks/ApiHooks/useRentals'
import Button from '@mui/material/Button';
import  './Book.scss';

export const Book = (props) =>{

  const { payload, loading } = useBooks(props.bookId)
  const { userData } = useUser()
  const { payload: payloadRentals, save, loading: loadingRentals } = useRentals()

  const today = new Date();

  if(loadingRentals) return <div>Loading....</div>
  if(loading) return <div>Loading.....</div>

  const handlExit = () =>{
    props.onClose()
  }
  const book = payload.data

  const rental = () =>{
    const body = { 
      id_books: props.bookId, 
      id_user: userData.id, 
      rental_date: today, 
      approved: '0'
    }
    save(body)
  }


  return(
    <>
      <DialogTitle><h3>{book.tytul}</h3></DialogTitle>
      <DialogContent>
        <div className='container book-module'>
          <div className='row'>
            <div className='col-6'>
              <img src={ `${book.id}.jpg`}/>
            </div>
            <div className='col-6'>
              <h5>Autor: { book.autor }</h5>
              <h5>Kategoria: { book.kategoria }</h5>
              <h5>Rok wydania: { book.rok_wydania }</h5>
              <h5>Opis: { book.opis }</h5>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={rental}>Wypożycz</Button>
        <Button onClick={handlExit}>Zamknij</Button>
      </DialogActions>
    </>
  )

}