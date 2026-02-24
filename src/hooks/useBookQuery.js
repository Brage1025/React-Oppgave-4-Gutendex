import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks, fetchBookDetails, fetchBooksByCategory } from "../api/axiosGutendex";

const useAllBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchAllBooks,
  });
};
const useCategoryBooks = (category, pageUrl = null) => {
  return useQuery({
    queryKey: ["categoryBooks", category, pageUrl],
    queryFn: ()=> fetchBooksByCategory(category, pageUrl),
    enabled: !!category,
  })
}



const useBookDetails = (id) => {
  return useQuery({
    queryKey: ["bookDetails", id],
    queryFn: () => fetchBookDetails(id),
    enabled: !!id,
  });
};

export { useAllBooks, useBookDetails, useCategoryBooks };
