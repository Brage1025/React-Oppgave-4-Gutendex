import NavBar from "./NavBar";
import "../../styles/global.css";
import Searchbar from "../SearchBar";

export default function Header({ onSelectData, searchBarRef, onHomeClick}) {
  return (
    <header className="header">
      <Searchbar onSelectData={onSelectData} ref={searchBarRef} />
      <NavBar onHomeClick={onHomeClick} />
    </header>
  );
}
