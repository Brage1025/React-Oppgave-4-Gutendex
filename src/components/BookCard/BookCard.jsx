import styles from "./bookCard.module.css";
import BookModal from "../../pages/BookDetailsModal";
import FavoriteButton from "../FavoriteButton";
import { useOutletContext } from "react-router-dom";

export default function BookCard({ book }) {
  const { setSelectedBookId } = useOutletContext();
  const openModal = () => {
    setSelectedBookId(book.id);
  };

  return (
    <>
      <div className={styles.bookCard}>
        <h2 className={styles.title} onClick={openModal}>
          {book.title}
        </h2>
        <img
          className={styles.bookImg}
          src={book.formats["image/jpeg"]}
          alt={book.title}
          width={220}
          onClick={openModal}
        />
        <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
        <FavoriteButton {...book} />
      </div>
    </>
  );
}
