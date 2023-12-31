import { NavLink, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons'
import FormDialog from '../PopUp/PopUp';
import { useState, useEffect } from "react";
import "./NavBar.scss"
import { useUser } from "../../hooks/ApiHooks/useUsers";
import { useNavigate } from "react-router-dom";

export const NavBar = () =>{

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLogged, userData } = useUser()
  const navigate = useNavigate()

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return(
    <div className={`navbar-module ${isScrolled ? "scrolled" : ""}`}>
      <div className="row justify-content-between">
        <div className="logo-box col-md-3" >
          <Link to={'/'}>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="LOGO"/>
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
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} use={"logIn"}/>
    </div>
  )
}