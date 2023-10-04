import { NavLink, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons'
import FormDialog from '../PopUp/PopUp';
import { useState } from "react";
import "./NavBar.scss"
import { useUser } from "../../hooks/ApiHooks/useUsers";
import { useNavigate } from "react-router-dom";

export const NavBar = () =>{

  const [isDialogOpen, setDialogOpen] = useState(false);
  const { isLogged, userData } = useUser()
  const navigate = useNavigate()

  const handleOpenDialog = () => {
    if(isLogged){
      if(userData.cardNumber === undefined){
        navigate('login/employee')
      }else{
        navigate('login/user')
      }
      
    }else{
      setDialogOpen(true);
    }
  }  
  const handleCloseDialog = () => {
      setDialogOpen(false);
  };

  console.log('userData', userData)

  return(
    <div className="navbar-module">
      <div className="row justify-content-between">
        <div className="logo-box col-md-3" >
          <Link to={'/'}>
            <img src={"logo.png"} alt="LOGO"/>
          </Link>
        </div>
        <div className="item-box col-md-4 d-flex ">
          <div className="row">
            <NavLink to={'/search'}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Szukaj</p>
            </NavLink>
          </div>
          <div className="row">
            <NavLink to={'/contact'}>
              <FontAwesomeIcon icon={faAddressBook} />
              <p>Kontakt</p>
            </NavLink>
          </div>
          <div className="row" onClick={handleOpenDialog}>
            <Link onClick={handleOpenDialog}>
              <FontAwesomeIcon icon={faUser} /> 
              {!isLogged ?<p>Zaloguj</p> : <p>Witaj {userData.firstName}</p>}
            </Link>
          </div>
        </div>
      </div>
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  )
}