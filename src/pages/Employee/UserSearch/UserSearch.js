import { SearchInput } from '../../../modules/SearchInput/SearchInput'
import { useUser } from '../../../hooks/ApiHooks/useUsers'
import './UserSearch.scss'
import FormDialog from '../../../modules/PopUp/PopUp';
import { useState } from "react";

export const UserSearch = () =>{

  const [isDialogOpen, setDialogOpen] = useState(false);
  const { payload, loading} = useUser()
  
  if(loading) return 'loading'
  
  const users = payload.data.filter(e=> e.source === 'Users')
  console.log(users)


  const recordData = (id) =>{
    console.log(id)
    setDialogOpen(true)
  }


  const handleCloseDialog = () => {
    setDialogOpen(false);
};

  return(
    <div className='container user-search-module'>
      <div className='row'>
        <h4> Wyszukaj użytkownika</h4>
      </div>
      <SearchInput user={true}/>
      <div className='row data-info'> 
          <div className='col'>
            <p>Imie</p>
          </div>
          <div className='col'>
            <p>Nazwisko</p>
          </div>
          <div className='col'>
            <p>Pesel</p>
          </div>
          <div className='col'>
            <p>Podgląd</p>
          </div>`
      </div>
      {users.map(user=> <div key={user.id}className='row person-data'>
        <div className='col'>
          <p>{user.imie}</p>
        </div>
        <div className='col'>
          <p>{user.nazwisko}</p>
        </div>
        <div className='col'>
          <p>{user.pesel}</p>
        </div>
        <div className='col'>
          <button onClick={()=>recordData(user.id)}>Podgląd/Edycja</button>
        </div>
      </div>)}
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} use={"user"}/>
    </div>  
  )
}