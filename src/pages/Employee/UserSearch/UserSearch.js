import {SearchInput} from '../../../modules/SearchInput/SearchInput'

export const UserSearch = () =>{

  return(
    <div className='container'>
      <div className='row'>
        <h4> Wyszukaj użytkownika</h4>
      </div>
      <div className='row'>
        <SearchInput/>
      </div>
    </div>  
  )
}