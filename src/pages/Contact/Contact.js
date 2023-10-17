import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonMilitaryPointing, faTruckFast, faGifts, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

export const Contact = () => {

  return(
    <div className="container contact-module">
      <div className="row">
        <div className="col-6 info-contact">
          <h1>Biuro obsługi klienta</h1>
          <h2>Infolinia</h2>
          <p>Infolinia czynna od poniedziałku do piątku w godzinach 8:00-18:00</p>
          <p><span>Tel: </span> 123456789</p>
          <p><span>E-mail: </span>kontakt@czytuczytu.pl</p>
        </div>
        <div className="col-6">
          <h1>Adres</h1>
          <h2> CzytuCzytu Sp. Z.O.O.</h2>
          <h3>Białystok 15-300 ul. Zachlapana 34 lokal 9</h3>
          <h3></h3>
        </div>
        <div className="col-12 info">
          <div className="row justify-content-center">
            <div className="col-3">
              <p>NIP</p>
              <p>REGON</p>
              <p>NUMER KONTA</p>
              <p>BANK</p>
            </div>
            <div className="col-5 col-md-3">
              <p>258852456</p>
              <p>456654451</p>
              <p>12345678900001452367891</p>
              <p>PKŁ Prywatny Kapitał Łobcych</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <h3>Mapa dojazdu</h3>
      </div>
      <div className="responsive-map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41171.768924254655!2d23.129715955672218!3d53.12833351083648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc048f41971d%3A0x72317dcc8bf07b2c!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1695141054126!5m2!1spl!2spl" width="100%" height="100%" style={{border: '0'}} allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="row our-atribute "> 
        <div className='col'>
          <FontAwesomeIcon icon={faPersonMilitaryPointing} />  
          <p>Bezpieczne korzystanie</p>
        </div>
        <div className='col'>
          <FontAwesomeIcon icon={faTruckFast} />
          <p>Szybka dostawa</p>
        </div>
        <div className='col'>
          <FontAwesomeIcon icon={faGifts} />
          <p>Darmowa dostawa</p>
        </div>
        <div className='col'>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          <p>14 dni na zwrot</p>
        </div>
      </div>
    </div>
  )
}