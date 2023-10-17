import { useRentals } from "../../../../hooks/ApiHooks/useRentals"
import { useUser } from "../../../../hooks/ApiHooks/useUsers"
import { useBooks} from "../../../../hooks/ApiHooks/useBooks"
import { useEffect, useState } from "react"

export const Rentals = () => {

  const { loading, userData } = useUser()
  const { loading: loadingRentals, payload, save, remove, refetch } = useRentals()
  const { loading: loadingBooks, payload: payloadBooks} = useBooks()
  const [refreshFlag, setRefreshFlag] = useState(false);

  let rentals = ''
  if(payload){
    rentals = payload.data.filter(e => e.id_user === userData.id.toString())
  }
  const today = new Date()

  useEffect(()=>{
    if(payload){
      rentals = payload.data.filter(e => e.id_user === userData.id.toString())
    }
    
  },[payload, refreshFlag])

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
        <div className="col-2">
          <p>Status:</p>
        </div>
        <div className="col-1">
          <p>Akcja:</p>
        </div>
      </div>
      {rentals.map(e => <div className="row heading-info" key={e.id}>
        <div className="col-3">
          <p>{whatBookIsThis(e.id_books)}</p>
        </div>
        <div className="col-3">
          <p>{e.rental_date}</p>
        </div>
        <div className="col-2">
          <p>{e.return_date}</p>
        </div>
        <div className="col-2">
          <p>{e.approved === '0'? "Z" : e.return_date  ? "O" : "W"}</p>
        </div>
        <div className="col-1">
          <button onClick={()=>removeButton( e.id )}>Usuń</button>
        </div>
        {e.approved !== '1' && <div className="col-1">
          <button onClick={()=> approvedButton( e )}>Zatwierdź</button>
        </div>}  
      </div>)}          
    </div>
  )
}