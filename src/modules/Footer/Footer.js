import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareTwitter, faSquareYoutube, faSquareInstagram, } from  '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faCity } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'


export const Footer = () => {

  return(
    <div className="container footer-module">
      <div className="row">
        <div className="col-8">
          <p>Regulamin strony popUp</p>
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faSquareTwitter} />
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faSquareYoutube} />
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </div>

      </div>
      <div className="row">

      </div>
      <div className="row">
        <div className="col-1">
          <h5>Kontakt:</h5>
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
    </div>
  )
}