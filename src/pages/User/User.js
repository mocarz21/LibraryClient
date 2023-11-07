import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from './Menu/Menu';
import { UserForm } from '../../modules/UserForm/UserForm';
import { BorrowedBooks } from './BorrowedBooks/BorrowedBooks';
import { useUser } from '../../hooks/ApiHooks/useUsers'

export const User = () =>{

  const { userData } = useUser();
  
  return(
    <div className="container user-module">
      <div className="row">
        <h1>Witaj {userData.firstName}</h1>
      </div>
      <div>
        <Menu/>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="data" />} />
        <Route path="data" element = { <UserForm /> } />
        <Route path ="editData" element = {<UserForm newOrEdit ={'edit'}/>}/>
        <Route path="borrowed" element = { <BorrowedBooks/> }/>
      </Routes>
    </div>
  )
}
