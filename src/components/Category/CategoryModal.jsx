import styles from "./categoryModal.module.css";

export default function BookModal({ isOpen, onClose, categories, onSelect }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Select category</h2>
        <div className={styles.categoryList}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                onSelect(cat.toLowerCase());
                onClose();
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
