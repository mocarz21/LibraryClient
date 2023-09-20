import AdvertisementSlider  from "../../modules/AdvertisementSlider/AdvertisementSlider";
import { SearchInput } from "../../modules/SearchInput/SearchInput";
import { NewBooks } from "./NewBooks/NewBooks"
import "./Home.scss";

export const Home = () => {

  return(
    <div className="home-module">
      <AdvertisementSlider/>
      <h1>Szukaj</h1>
      <p>Podaj tytuł lub autora</p>
      <SearchInput/>
      <NewBooks/>
    </div>
  )
}