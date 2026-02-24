import { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { useCategoryBooks } from "../hooks/useBookQuery";
import BookCard from "../components/BookCard/BookCard";
import Pagination from "../components/Pagination";

export default function CategoryBooks() {
  const { category } = useParams();
  const { searchData } = useOutletContext();
  const normalizedCategory = category.toLowerCase();
  const [pageUrl, setPageUrl] = useState(null);

  const { data, isLoading, isError, error } = useCategoryBooks(
    normalizedCategory,
    pageUrl,
  );

  let books = [];
  let paginationData = null;

  if (searchData && searchData.results) {
    // Filter search results by category
    books = searchData.results.filter((book) =>
      book.subjects?.some((subject) =>
        subject.toLowerCase().includes(normalizedCategory),
      ),
    );
    paginationData = searchData;
  } else if (data) {
    books = data.results;
    paginationData = data;
  }

  if (isLoading && !searchData) return <h3>Loading...</h3>;
  if (isError && !searchData)
    return <h3>Could not load books, error: {error}</h3>;
  if (!normalizedCategory) return <h3>Please select category</h3>;

  return (
    <>
      <h2>{normalizedCategory.toUpperCase()}</h2>
      <div className="bookList">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {!searchData && (
        <Pagination
          previous={paginationData?.previous}
          next={paginationData?.next}
          onPageChange={setPageUrl}
        />
      )}
    </>
  );
}
