import { Route, Routes } from "react-router-dom";
import { Search } from './pages/Search/Search'
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact'
import { Account } from './pages/Account/Account'
import { NavBar } from './modules/Navbar/NavBar'
import { User } from './pages/User/User';
import { Employee } from './pages/Employee/Employee'
import { useUser } from "./hooks/ApiHooks/useUsers";
import { useEffect } from "react";
import { Footer } from './modules/Footer/Footer'
import  Alert  from './modules/Alert/Alert'
export const Root = () => {

  const { isLoggedIn } = useUser();

  useEffect(() => {
    isLoggedIn();
  }, []);

  return(
    <>
      <NavBar/>
      <Routes>
        <Route path = "/" element = { <Home/> }/>
        <Route path = "/search" element = { <Search/> }/>
        <Route path = "/contact" element = { <Contact/> }/>
        <Route path = "/account" element = { <Account/> }/>
        <Route path = "/logIn/user/*" element = { <User/> }/>
        <Route path = "/logIn/employee/*" element = { <Employee/> }/>
      </Routes>
      <Footer/>
      <Alert/>
    </>
  )
}