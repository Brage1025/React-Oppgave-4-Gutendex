import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Chip, Stack } from "@mui/material";
import FavoriteButton from "../components/FavoriteButton";
import { Typography, Link } from "@mui/material";
import { useBookDetails } from "../hooks/useBookQuery";
import styles from "./bookDetailsModal.module.css";

export default function BookModal({ bookId, onClose }) {
  const { data: book, isLoading, isError } = useBookDetails(bookId);

  const handleClose = () => {
    onClose();
  };
  if (isLoading) return <h3>Loading...</h3>;
  if (isError || !book) return <h3>Book not found</h3>;

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.modalContent}>
          <Typography
            id="parent-modal-title"
            variant="h2"
            className={styles.title}
          >
            {book.title}
          </Typography>
          <Box className={styles.imageContainer}>
            <img
              className={styles.bookImage}
              src={book.formats["image/jpeg"]}
              alt={book.title}
              width={200}
            />
            <Typography
              id="parent-modal-desc"
              variant="caption"
              className={styles.modalDesc}
            >
              <Typography variant="body2" className={styles.author}>
                {book.authors?.map((a) => a.name).join(", ")}
              </Typography>
              <Typography variant="body2" className={styles.downloads}>
                {book.download_count} downloads
              </Typography>
              <Typography variant="body2" className={styles.language}>
                Language: {book.languages?.join(", ").toUpperCase()}
              </Typography>
              <br />
              <Button
                component="a"
                href={book.formats["text/html"]}
                target="_blank"
                rel="noopener"
                size="small"
                className={styles.readButton}
              >
                Open eBook
              </Button>
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {book.subjects?.map((subject, i) => (
              <Chip
                key={i}
                label={subject}
                size="small"
                className={styles.chip}
              />
            ))}
          </Stack>
          <br />
          <Typography id="buttons" variant="button" className={styles.buttons}>
            <FavoriteButton {...book} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
