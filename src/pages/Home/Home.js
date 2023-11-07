import AdvertisementSlider  from "../../modules/AdvertisementSlider/AdvertisementSlider";
import { NavSearch } from '../Home/NavSearch/NavSearch'
import { NewBooks } from "./NewBooks/NewBooks"
import "./Home.scss";

export const Home = () => {

  return(
    <div className="home-module">
      <AdvertisementSlider/>
      <h1>Dołącz do naszej biblioteki </h1>
      <NavSearch/>
      <NewBooks/>
    </div>
  )
}