import SingleRating from "./SingleRating"

const Rating = ({ rating, setRating }) => {
  let arr = []
  for (let i = 0; i < 11; i++) {
    arr.push(i)
  }
  return (
    <div className="rating">
      {arr?.map((k, key) => (
        <SingleRating k={k} key={key} rating={rating} setRating={setRating} />
      ))}
    </div>
  )
}
export default Rating
