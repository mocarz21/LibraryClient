import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from './Menu/Menu';
import { UserForm } from '../../modules/UserForm/UserForm';
import { BorrowedBooks } from './BorrowedBooks/BorrowedBooks';

export const User = () =>{
  
  return(
    <div className="container user-module">
      <div className="row">
        <h1>Witaj Adam</h1>
      </div>
      <div>
        <Menu/>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="data" />} />
        <Route path="data" element = { <UserForm isEditable = { false }/> } />
        <Route path ="editData" element = {<UserForm isEditable = { true }/>}/>
        <Route path="borrowed" element = { <BorrowedBooks/> }/>
      </Routes>
    </div>
  )
}
