import BookCard from "../components/BookCard/BookCard";
import FavoritesProvider, { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p>No favourites yet!</p>;

  return (
    <div>
      {favorites.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
