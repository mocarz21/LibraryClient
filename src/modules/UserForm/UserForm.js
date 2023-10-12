import './UserForm.scss'
import { useUser } from '../../hooks/ApiHooks/useUsers'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSubmitForm from '../../hooks/ApiHooks/useSubmitForm';

export const UserForm = ({newOrEdit}) => {

  const { logOut, userData } = useUser();
  const { handleSubmit } = useSubmitForm("/secure/employee/addUser");

  const [ id, setId ] = useState(userData.id)
  const [ name , setName] = useState(userData.firstName)
  const [ lastName , setLastName] = useState(userData.lastName)
  const [ pesel , setPesel] = useState(userData.pesel)
  const [ email , setEmail] = useState(userData.email)
  const [ city , setCity] = useState(userData.city)
  const [ streetName , setStreetName] = useState(userData.streetName)
  const [ homeNr , setHomeNr] = useState( userData.homeNr )
  const [ birthday , setBirthday] = useState(userData.birthday)
  const [ cardNumber, setCardNumber] = useState(userData.cardNumber)

  useEffect(() => {
    if (newOrEdit && newOrEdit === 'new') {
      setName('');
      setLastName('');
      setPesel('');
      setEmail('');
      setCity('');
      setStreetName('');
      setHomeNr('');
      setBirthday('');
      setCardNumber('')
    }else{
      setName(userData.firstName);
      setLastName(userData.lastName);
      setPesel(userData.pesel);
      setEmail(userData.email);
      setCity(userData.city);
      setStreetName(userData.streetName);
      setHomeNr(userData.homeNr);
      setBirthday(userData.birthday);
      setCardNumber(userData.cardNumber)
    }
  }, [newOrEdit, userData]);

  const navigate = useNavigate();
  const funLogOut=()=> {
    logOut()
    navigate('/')
  }
  let newMember = true
  let editMember = true
  let employeeEditMember = true

  if(newOrEdit === 'edit'){
    editMember = false
  }if(newOrEdit === 'new'){
    newMember = false
    editMember = false
  }if(newOrEdit === 'employeeEdit'){
    newMember = false
    editMember = false
    employeeEditMember = false
  }
  
  const addPerson = async (e) =>{
    e.preventDefault();
    const userDataToSend = {id, name, lastName, pesel, email, city, streetName, homeNr, birthday, cardNumber };
    await handleSubmit(e, userDataToSend); // przekaż dane do handleSubmit
  };
  

  return(
    <div className="container data-module">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="img-box">
              <img src="/avatar/luz.jpg" alt="AVATAR"/>
            </div>
          </div>
          <div className="col-4 data-info">
            <div className='row'>
              <div className='col'>
                <p>Imię:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e => setName(e.target.value)} value={name} readOnly={newMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Nazwisko:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} readOnly={newMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Pesel:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e=> setPesel(e.target.value)}value={pesel} readOnly={newMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>E-mail:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e=> setEmail(e.target.value)} value={email} readOnly={editMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Miasto:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e=> setCity(e.target.value)} value={city} readOnly={editMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Ulica:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e=> setStreetName(e.target.value)} value={streetName} readOnly={editMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Nr. domu:</p>
              </div>
              <div className='col'>
                <input type="text" onChange={e=> setHomeNr(e.target.value)} value={homeNr} readOnly={editMember}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Data urodzenia:</p>
              </div>
              <div className='col'>
                <input type="text"  onChange={e=> setBirthday(e.target.value)} value={birthday} readOnly={newMember}/>
              </div> 
            </div>
          </div>  
        </div>  
        { (userData.cardNumber || newOrEdit === 'new') && <div className='row card-number'>
          <div className='col-3'>
            <p>Numer karty bibliotecznej:</p>
          </div>
          <div className='col-2'>
            <input type="text" onChange={e=> setCardNumber(e.target.value)} value={cardNumber} readOnly={true}/>
          </div> 
        </div>}
      </form>
      <div>
        {employeeEditMember === true &&<div>
          <button onClick={funLogOut}>Wyloguj</button>
        </div>}  
        {newOrEdit && <div>
          <button onClick={addPerson}>{newOrEdit === 'edit' || newOrEdit === 'employeeEdit' ? 'Edytuj czytelnika' : 'Dodaj czytelnika' }</button>
        </div>}
      </div>
    </div>
  )
}