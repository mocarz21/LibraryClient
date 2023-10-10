import { useBooks } from "../../../hooks/ApiHooks/useBooks"
import { useState } from "react"

export const AddBook = () => {

  const { save } =useBooks()

  const [img, setImg ] = useState('')
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState(2000);
  const [category, setCategory] = useState('fantasy');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault()
    const body ={title,author,publishYear,category,description}
    save(body)
  }

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
                <input type="text" value={title} onChange ={e=>setTitle(e.target.value) }/>
              </div> 
            </div>
            <div className='row '>
              <div className='col'>
                <p>Autor:</p>
              </div>
              <div className='col'>
                <input type="text" value={author} onChange={e=> setAuthor(e.target.value)}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Rok wydania:</p>
              </div>
              <div className='col'>
              <input type="number" id="year" className='year' name="year" value={publishYear} onChange={e=> setPublishYear(e.target.value)}/>
              </div> 
            </div>
            <div className='row '>
              <div className='col'>
                <p>Kategoria:</p>
              </div>
              <div className='col-6'>
                <select id="category" name='category' value={category} onChange={e=> setCategory(e.target.value)}>
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
              <textarea  value={description}  onChange={e=> setDescription(e.target.value)}/>
            </div> 
            <button onClick = {handleSubmit}>Dodaj</button>
        </div>
      </form>
    </div> 
  )
}