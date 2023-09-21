import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUserPen, faBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export const Menu = () =>{

  return(
    <div className="container menu-module">
      <div className="row">
        <div className="col">
          <NavLink to={'/logIn/user/data'}> 
            <FontAwesomeIcon icon={faIdCard} />
            <p>Dane</p>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={"/logIn/user/editData"}> 
            <FontAwesomeIcon icon={faUserPen} />
            <p>Edycja danych</p>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={"/logIn/user/borrowed"}>   
            <FontAwesomeIcon icon={faBook} />
            <p>Wypożyczone</p>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={"/search"}>   
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Szukaj</p>
          </NavLink>  
        </div>
      </div>
    </div>
  )
}