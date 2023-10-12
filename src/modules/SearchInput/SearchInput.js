import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useFilterBooks } from '../../hooks/useFilterBooks' 
import { useFilterUser } from '../../hooks/useFilterUser'
import { useState } from 'react'
import './SearchInput.scss'

export const SearchInput = ({user,action}) => {

  const [textSearch, setTextSearch] = useState('')
  const [genre, setGenre] = useState('all');
  const [year, setYear] = useState('');
  const [available, setAvailable] = useState(false);
  const [language, setLanguage] = useState('pl');

  const filteredBooks = useFilterBooks({ textSearch, genre, year, available, language });
  const filteredText = useFilterUser({textSearch})

  const sendDataToSearch = () =>{
   user ? action(filteredText) : action(filteredBooks)

  }

  return(
    <div className="search-input-module container">
      <div className='row'>
        <div className='search-container col align-self-center'>
          <input type="text" className="search-input" placeholder="Wyszukaj..." value={textSearch} onChange={e=> setTextSearch(e.target.value)}/>
          <button class="search-button" onClick={(sendDataToSearch)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />  
          </button>
        </div>
        {!user && <div className='search-filters '>
          <div className='main-filters row'>
            <div className='col-7 col-md-3 '>
              <label for="genre">Kategoria: </label>
              <select id="genre" name='genre' value={genre} onChange={e => setGenre(e.target.value)}>
                <option value='all'>Wszystko</option>
                <option value='fantasy'>Fantastyka</option>
                <option value="history">Historia</option>
              </select>
            </div>
            <div className='col-5 col-md-1` '>
              <input type="number" id="year" className='year' name="year" placeholder="Rok wydania" value={year} onChange={e => setYear(e.target.value)}/>
            </div>
            <div className='col-7 col-md-2 '>
              <input type='checkbox' id="available" name="available" value={available} onChange={e => setAvailable(e.target.checked) }/>
              <label for="available">Tylko dostępne</label>
            </div>
            <div className='col-5 col-md-2 '>
              <label for="language">Język: </label>
              <select id='language' name='language' value={language} onChange={e=> setLanguage(e.target.value)}>
                <option value='pl'>Polski</option>
                <option value='en'>Angielski</option>
              </select>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}