import { useRentals } from "../../../../hooks/ApiHooks/useRentals"
import { useUser } from "../../../../hooks/ApiHooks/useUsers"
import { useBooks} from "../../../../hooks/ApiHooks/useBooks"
import { useEffect, useState } from "react"
import { DateOnly } from '../../../../modules/DateOnly/DateOnly'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faThumbsUp, } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import './Rentals.scss'

export const Rentals = ({userId}) => {

  const { loading, payload: userData } = useUser(userId)
  const { loading: loadingRentals, payload, save, remove, refetch } = useRentals()
  const { loading: loadingBooks, payload: payloadBooks} = useBooks()
  const [refreshFlag, setRefreshFlag] = useState(false);

  let rentals = ''
  if(payload){
    rentals = payload.data.filter(e => e.id_user === userData.body.id.toString())
  }
  const today = new Date()

  useEffect(()=>{
    if(payload){
      rentals = payload.data.filter(e => e.id_user === userData.body.id.toString())
    }
    
  },[payload, refreshFlag])

  console.log(rentals)

  if(loading || loadingRentals || loadingBooks) return <div>Loading ....</div>

  const whatBookIsThis =(id) =>{
    return payloadBooks.data.find(e => e.id.toString() === id.toString()).tytul
  }

  const addDelay = () =>{
    setRefreshFlag(true)
    setTimeout(async () => {
      await refetch();
      setRefreshFlag(false);
    }, 100);
  }

  const approvedButton = (e) =>{
    const modifiedE = {...e, approved: '1', rental_date: today }
    save(modifiedE)
    addDelay()
  }

  const removeButton = async (id) =>{
    remove(id)
    addDelay()
  }

  const returnBook = (e) =>{
    const modifiedE = {...e, approved: '0', return_date: today }
    save(modifiedE)
    addDelay()
  }
  
  return(
    <div className="container borrowed-books-module">
      <div className="row">
      <h3>Historia wypożyczeń</h3>
        <div className="col-4 align-self-center">
          <label>
            Pokaż tylko nieoddane:
            <input type="checkbox" />
          </label>
        </div>
      </div>   
      <div className="row heading-info">
        <div className="col-3">
          <p>Tytuł</p>
        </div>
        <div className="col-3">
          <p>Data wypożyczenia</p>
        </div>
        <div className="col-2">
          <p>Data oddania</p>
        </div>
        <div className="col-1">
          <p>Status:</p>
        </div>
        <div className="col-3">
          <p>Akcja:</p>
        </div>
      </div>
      {rentals.map(e => <div className="row heading-info" key={e.id}>
        <div className="col-3">
          <p>{whatBookIsThis(e.id_books)}</p>
        </div>
        <div className="col-3">
          <p>{DateOnly(e.rental_date)}</p>
        </div>
        <div className="col-3">
          <p>{DateOnly(e.return_date)}</p>
        </div>
        <div className="col-1">
          <p>{e.approved === '0'? "Z" : e.return_date  ? "O" : "W"}</p>
        </div>
        <div className="col-1 icons">
          <FontAwesomeIcon className='icon' icon={faTrashCan} onClick={()=>removeButton( e.id )}/>
        </div>
        <div className="col-1 icons">
           {e.approved !== '1' &&<FontAwesomeIcon className="icon" icon={faThumbsUp} onClick={()=> approvedButton( e )} />}
        </div>
        {e.approved == '1' && <div className="col-1 icons">
        <FontAwesomeIcon className="icon"  icon={faRightToBracket} onClick={()=> returnBook( e.id )}/>
        </div>}    
      </div>)}          
    </div>
  )
}