import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchInput.scss'

export const SearchInput = () => {

  return(
    <div className="search-input-module container ">
      <div className='row'>
        <div className='search-container col align-self-center'>
          <input type="text" className="search-input" placeholder="Wyszukaj..."/>
          <button class="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />  
          </button>
        </div>
        <div className='search-filters '>
          <div className='main-filters row'>
            <div className='col-7 col-md-3 '>
              <label for="genre">Kategoria: </label>
              <select id="genre" name='genre'>
                <option value='all'>Wszystko</option>
                <option value='fantasy'>Fantastyka</option>
                <option value="history">Historia</option>
              </select>
            </div>
            <div className='col-5 col-md-1` '>
              <input type="number" id="year" className='year' name="year" placeholder="Rok wydania"/>
            </div>
            <div className='col-7 col-md-2 '>
              <input type='checkbox' id="available" name="available"/>
              <label for="available">Tylko dostępne</label>
            </div>
            <div className='col-5 col-md-2 '>
              <label for="language">Język: </label>
              <select id='language' name='language'>
                <option value='pl'>Polski</option>
                <option value='en'>Angielski</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}