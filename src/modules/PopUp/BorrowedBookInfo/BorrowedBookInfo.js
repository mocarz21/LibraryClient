import { useState } from "react"

export const BorrowedBookInfo = ({info, onClose}) =>{

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <p><b>Data wypożyczenia: </b>{info.rental_date}</p>
        </div>
        <div className="col">
          <p><b>Data oddania: </b>{info.return_date}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><b>Status: </b>{info.approved === '0'? "Oczekujące" : info.return_date  ? "Oddane" : "Wypożyczone"}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={onClose}>Zamknij</button>
        </div>
      </div>
    </div>
  )
}