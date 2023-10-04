

export const AddBook = () => {

  return(
    <div className="container add-book-module">
      <h4>Dodaj książkę</h4>
      <form>
        <div className="row ">
          <div className="col ">
            <h1>image</h1>
          </div>
          <div className="col">
            <div className='row'>
              <div className='col'>
                <p>Tytuł:</p>
              </div>
              <div className='col'>
                <input type="text" value={'Tytuł'} />
              </div> 
            </div>
            <div className='row '>
              <div className='col'>
                <p>Autor:</p>
              </div>
              <div className='col'>
                <input type="text" value={'Autor'} />
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Rok wydania:</p>
              </div>
              <div className='col'>
              <input type="number" id="year" className='year' name="year"/>
              </div> 
            </div>
            <div className='row '>
              <div className='col'>
                <p>Kategoria:</p>
              </div>
              <div className='col-6'>
                <select id="category" name='category'>
                  <option value='fantasy'>Fantastyka</option>
                  <option value="history">Historia</option>
                </select>
              </div> 
            </div>
          </div>
        </div>
        <div className='row'>
              <div className='col'>
                <p>Opis:</p>
              </div>
              <div className='col'>
              <textarea  value="tutaj napsiz co chcesz" />
              </div> 
            </div>
      </form>
    </div> 
  )
}