import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "../styles/global.css";
import { searchBooks } from "../api/axiosGutendex.js";

const SearchBar = forwardRef(({ onSelectData }, ref) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      setQuery("");
    },
  }));

  useEffect(() => {
    if (!query.trim()) {
      onSelectData(null);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchBooks(query);
        onSelectData(data);
      } catch (error) {
        console.error(error);
        onSelectData(null);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [query, onSelectData]);

  return (
    <div className="search-bar-container">
      <input
        className="searchInput"
        type="text"
        placeholder="Search for your favourite books here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
});

export default SearchBar;
