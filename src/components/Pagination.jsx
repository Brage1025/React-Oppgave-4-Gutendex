export default function Pagination({ previous, next, onPageChange }) {
  return (
    <div className="pagination">
      <button
        className="button"
        disabled={!previous}
        onClick={() => onPageChange(previous)}
      >
        &lt;&lt; Previous
      </button>
      <button
        className="button"
        disabled={!next}
        onClick={() => onPageChange(next)}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
}
