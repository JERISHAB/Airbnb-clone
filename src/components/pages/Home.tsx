import Navbar from "../organisms/Navbar"
import PopularHomes from "../organisms/PopularHomes"
import SearchBox from "../organisms/SearchBox"

const Home = () => {
  return (
    <div className="font-a" ><Navbar />
      <SearchBox />
      <PopularHomes/>
    </div>
  )
}

export default Home