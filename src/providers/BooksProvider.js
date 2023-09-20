import { createContext, useState } from "react";

export const BookContext = createContext();

const BooksProvider =({children}) =>{

  const [ booksData, setBooksData ] = useState({});
  const [ filtersData, setFiltersData ] = useState({
    filters:{
      title: '', 
      author: '',
      category: '',
      publicationYear: '',
    }
  });

  return(
    <BookContext.Provider
      value ={{
        booksData,
        setBooksData,
        filtersData,
        setFiltersData
      }}
    >
      {children}
    </BookContext.Provider>
  )

}





export default BooksProvider;