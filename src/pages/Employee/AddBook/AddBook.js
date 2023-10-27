import { useBooks } from "../../../hooks/ApiHooks/useBooks"
import { useState } from "react"
import { useDropzone } from 'react-dropzone';
import { useImg } from '../../../hooks/ApiHooks/useImg'
import './AddBook.scss'

export const AddBook = () => {

  const { save } =useBooks()
  const { sendImg } = useImg()

  const [img, setImg ] = useState(null)
  const [imgName, setImgName ] = useState('')
  const [imgUrl, setImgUrl] = useState(null)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState(2000);
  const [category, setCategory] = useState('fantasy');
  const [description, setDescription] = useState('');
  
  const onDrop = (acceptedFiles) => {
    // Obsługa przeciągnięcia i upuszczenia pliku
    const file = acceptedFiles[0];
    if (file) {
      setImgUrl(URL.createObjectURL(file));
      setImgAndImgName(file);
    }
  };

  const saveImg = async ()=>{
    await sendImg(img, imgName)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const body ={imgName,title,author,publishYear,category,description}
    save(body)
    if (img) {
      await saveImg(img); // Przesyłamy plik na serwer, jeśli został wybrany
    } else {
      console.error("Nie wybrano pliku do przesłania.");
    }
  }

  const setImgAndImgName = (file) =>{
    if(file){
      setImg(file)
      const imgNameWithoutExtension = file.name.split('.')[0]
      setImgName(imgNameWithoutExtension)
    }
  }

  return(
    <div className="container add-book-module">
      <h4>Dodaj książkę</h4>
      <form>
        <div className="row form-floating">
          <div className="col-sm-6 col-12 image-preview" {...getRootProps()}>
            <input type="file" name="file" onChange={(e) => setImgAndImgName(e.target.files[0])} {...getInputProps()}/>
            {imgUrl && <img src={imgUrl} alt="obrazek"/>}
            {imgUrl ? '': isDragActive ? <h2 className="border-rounded">Upuść tutaj</h2> : <h4 className="border-rectangle">Przeciągnij i upuść lub kliknij i wybierz obraz którego chcesz użyć</h4>}
            <p>{imgName}</p>
          </div>
          <div className="col">
            <div className='row'>
              <div className='col-6'>
                <p className="text-start">Tytuł:</p>
              </div>
              <div className='col-6'>
                <input className=" form-control" type="text" value={title} onChange ={e=>setTitle(e.target.value) }/>
              </div> 
            </div>
            <div className='row '>
              <div className='col-6'>
                <p className="text-start ">Autor:</p>
              </div>
              <div className='col-6'>
                <input className=" form-control" type="text" value={author} onChange={e=> setAuthor(e.target.value)}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col-6'>
                <p className="text-start">Rok wydania:</p>
              </div>
              <div className='col-6'>
              <input className='year form-control' type="number" id="year"  name="year" value={publishYear} onChange={e=> setPublishYear(e.target.value)}/>
              </div> 
            </div>
            <div className='row '>
              <div className='col-6'>
                <p className="text-start">Kategoria:</p>
              </div>
              <div className='col-6'>
                <select  className="form-control" id="category" name='category' value={category} onChange={e=> setCategory(e.target.value)}>
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
        </div>
        <div className="row">
          <div className='col-12'>
            <textarea className='' value={description}  onChange={e=> setDescription(e.target.value)}/>
          </div> 
          <button className='btn btn-primary'onClick = {handleSubmit}>Dodaj</button>
        </div>
      </form>
    </div> 
  )
}