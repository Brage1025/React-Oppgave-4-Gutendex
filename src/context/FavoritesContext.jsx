/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);


  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      return exists
        ? prev.filter((i) => i.id !== item.id) 
        : [...prev, item]; 
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((i) => i.id !== id));
  };

  const providerObject = { favorites, toggleFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={providerObject}>
      {children}
    </FavoritesContext.Provider>
  );
}
