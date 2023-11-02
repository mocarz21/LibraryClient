import { useUser } from '../../../hooks/ApiHooks/useUsers'
import { useEffect, useState } from 'react';
import { Rentals } from "./Rentals/Rentals"
import useSubmitForm from '../../../hooks/ApiHooks/useSubmitForm';


export const UserId = ({userId, onClose}) => {
  const { payload, loading, remove } = useUser(userId);
  const { handleSubmit } = useSubmitForm("/secure/employee/addUser");
  
  const [id, setId] = useState(userId);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pesel, setPesel] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [streetName, setStreetName] = useState("");
  const [homeNr, setHomeNr] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    if (payload && payload.body) {
      setName(payload.body.firstName);
      setLastName(payload.body.lastName);
      setPesel(payload.body.pesel);
      setEmail(payload.body.email);
      setCity(payload.body.city);
      setStreetName(payload.body.streetName);
      setHomeNr(payload.body.homeNr);
      setBirthday(payload.body.birthday);
      setCardNumber(payload.body.cardNumber);
    }
  }, [payload]);

  if(loading) return <div>Loading...</div>

  const editPerson = async (e) =>{
    e.preventDefault();
    const userDataToSend = {id, name, lastName, pesel, email, city, streetName, homeNr, birthday, cardNumber };
    await handleSubmit(e, userDataToSend);
    onClose()
  };

  const deleteUser = () =>{
    remove(userId)
    onClose()
  }
  
  return(
    <div className="container data-module">
      <h3>Edytuj czytelnika: </h3>
      <form>
        <div className="row">
          <div className="col-4 data-info">
            <div className='row'>
              <div className='col-8'>
                <p>Imię:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Nazwisko:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Pesel:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e=> setPesel(e.target.value)}value={pesel} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>E-mail:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e=> setEmail(e.target.value)} value={email} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Miasto:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e=> setCity(e.target.value)} value={city} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Ulica:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e=> setStreetName(e.target.value)} value={streetName} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Nr. domu:</p>
              </div>
              <div className='col-4'>
                <input type="text" onChange={e=> setHomeNr(e.target.value)} value={homeNr} />
              </div> 
            </div>
            <div className='row'>
              <div className='col-8'>
                <p>Data urodzenia:</p>
              </div>
              <div className='col-4'>
                <input type="text"  onChange={e=> setBirthday(e.target.value)} value={birthday} />
              </div> 
            </div>
          </div>  
        </div>  
        <div className='row card-number'>
          <div className='col-4'>
            <p>Numer karty bibliotecznej:</p>
          </div>
          <div className='col-4'>
            <input type="text" onChange={e=> setCardNumber(e.target.value)} value={cardNumber} readOnly={true}/>
          </div> 
        </div>
        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary' onClick={editPerson}>Edytuj</button>
          </div>
          <div className='col'>
            <button className='btn btn-primary' onClick={deleteUser}>Usuń urzytkownika</button>
          </div>
        </div>
      </form>
      <Rentals userId={userId}/>
    </div>
  )
}