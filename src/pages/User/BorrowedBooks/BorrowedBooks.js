import { useRentals } from "../../../hooks/ApiHooks/useRentals"
import { useUser } from "../../../hooks/ApiHooks/useUsers"
import { useBooks} from "../../../hooks/ApiHooks/useBooks"
import "./BorrowedBooks.scss"

export const BorrowedBooks = () => {

  const { loading, userData } = useUser()
  const { loading: loadingRentals, payload } = useRentals()
  const { loading: loadingBooks, payload: payloadBooks} = useBooks()
  if(loading || loadingRentals || loadingBooks) return <div>Loading ....</div>

  const rentals = payload.data.filter(e => e.id_user === userData.id.toString())

  const whatBookIsThis =(id) =>{
    return payloadBooks.data.find(e => e.id.toString() === id.toString()).tytul
  }

  return(
    <div className="container borrowed-books-module">
      <div className="row">
        <div className="col-5">
          <h3>Historia wypożyczeń</h3>
        </div>
        <div className="col-4 align-self-center">
          <label>
            Pokaż tylko nieoddane:
            <input type="checkbox" />
          </label>
        </div>
      </div>   
      <div className="row heading-info">
        <div className="col">
          <p>Tytuł</p>
        </div>
        <div className="col">
          <p>Data wypożyczenia</p>
        </div>
        <div className="col">
          <p>Data oddania</p>
        </div>
        <div className="col">
          <p>Status:</p>
        </div>
        <div className="col-1">
          <p>Akcja:</p>
        </div>
      </div>
      {rentals.map(e => <div className="row heading-info">
        <div className="col">
          <p>{whatBookIsThis(e.id_books)}</p>
        </div>
        <div className="col">
          <p>{e.rental_date}</p>
        </div>
        <div className="col">
          <p>{e.return_date}</p>
        </div>
        <div className="col">
          <p>{e.approved === '0'? "Oczekujące" : e.return_date  ? "Oddane" : "Wypożyczone"}</p>
        </div>
        <div className="col-1">
          <button>Usuń</button>
        </div>  
      </div>)}          
    </div>
  )
}