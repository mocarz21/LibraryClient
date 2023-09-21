import "./BorrowedBooks.scss"

export const BorrowedBooks = () => {

  return(
    <div className="container borrowed-books-module">
      <div className="row">
        <div className="col-5">
          <h3>Historia wypożyczeń</h3>
        </div>
        <div className="col-4 align-self-center">
          <label>
            Pokaż tylko nieoddane:
            <input type="checkbox" />
          </label>
        </div>
      </div>   
      <div className="row heading-info">
        <div className="col">
          <p>Tytuł</p>
        </div>
        <div className="col">
          <p>Data wypożyczenia</p>
        </div>
        <div className="col">
          <p>Data oddania</p>
        </div>
      </div>       
    </div>
  )
}