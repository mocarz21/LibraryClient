import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useBooks } from '../../../hooks/ApiHooks/useBooks';
import { useUser } from '../../../hooks/ApiHooks/useUsers';
import { useRentals } from '../../../hooks/ApiHooks/useRentals'
import Button from '@mui/material/Button';
import { useImg } from '../../../hooks/ApiHooks/useImg';
import  './Book.scss';

export const Book = (props) =>{

  const { payload, loading } = useBooks(props.bookId)
  const { userData } = useUser()
  const {  save, loading: loadingRentals } = useRentals()
  const { images } = useImg()

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
  console.log('userData',userData)

  return(
    <>
      <DialogTitle><h3>{book.tytul}</h3></DialogTitle>
      <DialogContent>
        <div className='container book-module text-center'>
          <div className='row '>
            <div className='col-6 small-screen'>
              <img src={ images[book.nazwa_Img]} alt={'Obraz'}/>
            </div>
            <div className='col-sm-6 col-12 align-self-center'>
              <h5><b>Autor:</b></h5> <p>{ book.autor }</p>
              <h5><b>Kategoria:</b></h5><p>{ book.kategoria }</p> 
              <h5><b>Rok wydania:</b></h5><p>{ book.rok_wydania }</p> 
              <h5><b>Opis:</b></h5><p className='description'>{ book.opis }</p> 
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {userData.cardNumber && <Button onClick={rental}>Wypożycz</Button>}
        <Button onClick={handlExit}>Zamknij</Button>
      </DialogActions>
    </>
  )

}