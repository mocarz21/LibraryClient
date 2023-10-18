import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareTwitter, faSquareYoutube, faSquareInstagram, } from  '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faCity } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'
import  FormDialog  from '../PopUp/PopUp'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export const Footer = () => {

  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate()

  const handleCloseDialog =() =>{
    setDialogOpen(false)
  }
  const openPopup = () =>{
    setDialogOpen(true)
  }

  const handleNavigate = () =>{
    navigate('contact')
  }

  return(
    <div className="container footer-module">
      <div className="row">
        <div className="col-6 statute" onClick={openPopup}>
          <p>Regulamin</p>
        </div>
        <div className="col-1">
          <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a>
        </div>
        <div className="col-1">
          <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faSquareTwitter} /></a>
        </div>
        <div className="col-1">
          <a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faSquareYoutube} /></a>
        </div>
        <div className="col-1">
          <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a> 
        </div>
      </div>
      <div className="row information">
        <div className="col-1">
          <p>Kontakt:</p>
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faPhone} /> 
        </div>
        <div className="col-2">
          <p>545454352</p>
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="col-2">
          <p>czytuczytu@czytu.pl</p>
        </div>
        <div className="col-1">
        <FontAwesomeIcon icon={faCity} />
        </div>
        <div className="col-3">
          <p>Białystok 15-300 ul. Zachlapana 34 lokal 9</p>
        </div>
      </div>
      <FormDialog open={isDialogOpen} onClose={handleCloseDialog} use={"statute"}/> 
      <div className="row sm-window">
        <div className="col-6" >
          <p onClick={ handleNavigate}>Kontakt</p>
        </div>
      </div> 
    </div>
  )
}