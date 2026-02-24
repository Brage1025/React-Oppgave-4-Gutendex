import { useFavorites } from "../context/FavoritesContext";
import "../styles/global.css";

export default function FavoriteButton(props) {
  const { id } = props;
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((f) => f.id === id);

  return (
    <button
      className="button"
      onClick={() => toggleFavorite(props)}
      aria-label="toggle favorite"
    >
      {isFavorite ? "Favourited ★ " : "Add to favourites ☆"}
    </button>
  );
}
