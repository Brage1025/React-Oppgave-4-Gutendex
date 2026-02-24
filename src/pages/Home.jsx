import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";
import BookCard from "../components/BookCard/BookCard";
import { fetchRandomBooks, searchBooks } from "../api/axiosGutendex.js";
import styles from "./home.module.css";

export default function Home() {
  const { searchData } = useOutletContext();
  const [pageUrl, setPageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageUrl(null);
  }, [searchData]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        let response;

        if (searchData && searchData.results) {
          response = pageUrl ? await searchBooks(null, pageUrl) : searchData;
        } else {
          response = await fetchRandomBooks(pageUrl);
        }

        setData(response);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [searchData, pageUrl]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No books found</p>;

  return (
    <>
      <h1 className={styles.title}>Gutenberg book library</h1>
      <p className={styles.description}>
        Browse through this random selection of books, search for your favorite
        books or browse books through categories.
      </p>
      <p className={styles.description}>Click the books to read more.</p>
      <div className="bookList">
        {data.results.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination
        previous={data.previous}
        next={data.next}
        onPageChange={setPageUrl}
      />
    </>
  );
}
