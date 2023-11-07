import { useNavigate } from "react-router-dom"
import './NavSearch.scss'

export const NavSearch = () =>{

  const navigate = useNavigate()

  return(
<div class="nav-search-module d-flex justify-content-center align-items-center container d-none d-sm-block">
  <div class="overlay"></div>
  <img src="banner.jpg" alt="Obrazek" />
  <div class="text-container" onClick={()=>navigate('/search')}>
    <p >Wyszukaj interesujący tytuł</p>
    <div class="trapezoid"></div>
  </div>
</div>
  )
  
}