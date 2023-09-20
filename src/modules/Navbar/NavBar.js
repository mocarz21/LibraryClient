import { NavLink, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons'
import FormDialog from '../PopUp/PopUp';
import { useState } from "react";
import "./NavBar.scss"

export const NavBar = () =>{

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
      setDialogOpen(true);
  };

  const handleCloseDialog = () => {
      setDialogOpen(false);
  };

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
              <p>Zaloguj</p>
            </Link>
          </div>
        </div>
      </div>
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  )
}