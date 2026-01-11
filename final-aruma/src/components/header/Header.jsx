import Navbar from "./Navbar"
import Promobar from "./Promobar"
import Searchbar from "./Searchbar"

function Header() {
  return(
    <header className="header">
      <Promobar />
      <Searchbar />
      <Navbar />
    </header>
  )
}

export default Header