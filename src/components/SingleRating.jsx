const SingleRating = ({ k, rating, setRating }) => {
  return (
    <div
      className={rating === k ? "single-rating-selected" : "single-rating"}
      onClick={() => setRating(k)}
    >
      {k}
    </div>
  )
}
export default SingleRating
