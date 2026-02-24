import { useNavigate, Link } from "react-router-dom";
import "../../styles/global.css";
import { useState } from "react";
import BookModal from "../Category/CategoryModal";

const categories = [
  "fiction",
  "mystery",
  "thriller",
  "romance",
  "fantasy",
  "morality",
  "society",
  "power",
  "justice",
  "adventure",
  "tragedy",
  "war",
  "philosophy",
];

export default function NavBar({ onHomeClick }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category) => {
    navigate(`category/${category}`);
    setIsModalOpen(false);
  };

  const handleHome = () => {
    onHomeClick(); //reset input and search data
    navigate("/");
  };

  return (
    <nav className="navBar">
      <button className="button" onClick={() => setIsModalOpen(true)}>
        Categories
      </button>
      <Link to="favorites" className="button">
        Favourites
      </Link>
      {/* button to home insted of link because i want to reset the search input */}
      <button className="button" onClick={handleHome}>
        Home
      </button>
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        onSelect={handleCategorySelect}
      />
    </nav>
  );
}
