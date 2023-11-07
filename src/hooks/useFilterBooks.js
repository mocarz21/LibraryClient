import { useBooks } from './ApiHooks/useBooks' 

export const useFilterBooks = (data) =>{
  
  const { payload, loading } = useBooks()

  if (loading) return <div>Loading ....</div>

  const { textSearch, genre, year, available, language } = data

  console.log(payload.data[0].rok_wydania)
  
  const filteredBooks = payload.data.filter(book => {
    if (textSearch && !(book.tytul.toLowerCase().includes(textSearch.toLowerCase()) || book.autor.toLowerCase().includes(textSearch.toLowerCase()))) return false;
    if (genre !== 'all' && book.kategoria !== genre) return false;
    if (year && book.rok_wydania !== parseInt(year)) return false;
    if (available && book.wypozyczono !== "1") return false; 
    if (language && book.jezyk !== language) return false; 
    return true;
  });
  return(
    filteredBooks
  )
}