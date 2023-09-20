import { Navigate, Route, Routes } from "react-router-dom";
import { Search } from './pages/Search/Search'
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact'
import { Account } from './pages/Account/Account'
import { NavBar } from './modules/Navbar/NavBar'

export const Root = () => {

  return(
    <>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={ <Home/> }/>
        <Route exact path = "/search" element={<Search/>}/>
        <Route exact path = "/contact" element ={<Contact/>}/>
        <Route exact path = "/account" element ={<Account/>}/>
      </Routes>
    </>
  )
}