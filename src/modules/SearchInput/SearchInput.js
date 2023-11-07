import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useFilterBooks } from '../../hooks/useFilterBooks' 
import { useFilterUser } from '../../hooks/useFilterUser'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchInput.scss'

export const SearchInput = ({user,action}) => {
  
  const navigate = useNavigate()

  const [textSearch, setTextSearch] = useState('')
  const [genre, setGenre] = useState('all');
  const [year, setYear] = useState('');
  const [available, setAvailable] = useState(false);
  const [language, setLanguage] = useState('pl');

  const filteredBooks = useFilterBooks({ textSearch, genre, year, available, language });
  const filteredText = useFilterUser({textSearch})

  const sendDataToSearch = () =>{
    if(!action){
      navigate('/search')
    }else user ? action(filteredText) : action(filteredBooks)
  }

  return(
    <div className="search-input-module container">
      <div className='row'>
        <div className='search-container col align-self-center'>
          <input type="text" className="search-input" placeholder="Wyszukaj..." value={textSearch} onChange={e=> setTextSearch(e.target.value)}/>
          <button className="search-button" onClick={(sendDataToSearch)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />  
          </button>
        </div>
        {!user && <div className='search-filters'>
          <div className='main-filters row'>
            <div className='col-7 col-md-4 '>
              <label htmlFor="genre">Kategoria: </label>
              <select id="genre" name='genre' value={genre} onChange={e => setGenre(e.target.value)}>
                <option value='all'>Wszystko</option>
                <option value='Fantasy'>Fantastyka</option>
                <option value="Literatura historyczna">Literatura historyczna</option>
                <option value="Literatura romantyczna">Literatura romantyczna</option>
                <option value="Literatura dziecięca">Literatura dziecięca</option>
                <option value="Nowela">Nowela</option>
                <option value="Literatura młodzieżowa">Literatura młodzieżowa</option>
                <option value="Literatura polska">Literatura polska</option>
                <option value="Epika">Epika</option>
              </select>
            </div>
            <div className='col-5 col-md-3'>
              <input type="number" id="year" className='year' name="year" placeholder="Rok wydania" value={year} onChange={e => setYear(e.target.value)}/>
            </div>
            <div className='col-7 col-md-2 future '>
              <input type='checkbox' id="available" name="available" value={available} onChange={e => setAvailable(e.target.checked) }/>
              <label htmlFor="available">Tylko dostępne</label>
            </div>
            <div className='col-5 col-md-2 '>
              <label htmlFor="language">Język: </label>
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