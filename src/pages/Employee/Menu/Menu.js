import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUserPen, faBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export const Menu = () =>{

  return(
    <div className="container menu-module">
      <div className="row">
        <div className="col">
          <NavLink to={'/logIn/employee/data'}> 
            <FontAwesomeIcon icon={faIdCard} />
            <p>Dane pracownika</p>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={"/logIn/employee/findUser"}>   
            <FontAwesomeIcon icon={faBook} />
            <p>Znajdz użytkownika</p>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={"/logIn/employee/addBook"}>   
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Dodaj książkę</p>
          </NavLink>  
        </div>
        <div className="col">
          <NavLink to={"/logIn/employee/addUser"}>   
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Dodaj Czytelnika</p>
          </NavLink>  
        </div>
      </div>
    </div>
  )
}