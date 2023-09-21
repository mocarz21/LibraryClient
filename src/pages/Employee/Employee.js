import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from './Menu/Menu';
import { UserForm } from '../../modules/UserForm/UserForm';
import { UserSearch } from './UserSearch/UserSearch';
import { AddBook } from './AddBook/AddBook';

export const Employee = () =>{
  
  return(
    <div className="container user-module">
      <div className="row">
        <h1>Witaj Pracowniku</h1>
      </div>
      <div>
        <Menu/>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="data" />} />
        <Route path="data" element = { <UserForm isEditable = { false }/> } />
        <Route path="findUser" element = { <UserSearch/> }/>
        <Route path="addBook" element = { <AddBook/> }/>
        <Route path="addUser" element = { <UserForm isEditable = { true }/> }/>
      </Routes>
    </div>
  )
}

