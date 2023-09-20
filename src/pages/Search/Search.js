import { SearchInput } from '../../modules/SearchInput/SearchInput'
import './Search.scss'
export const Search = () => {

  return(
    <div className='search-module'>
      <h1>Wyszukaj</h1>
      <SearchInput/>
      <div>
        <h4>Wyniki Wyszukiwania:</h4>
      </div>
      <div>
        <p>Przepraszamy nie znaleziono żadnych książek o podanym kryterium</p>
      </div>
    </div>
  )
}