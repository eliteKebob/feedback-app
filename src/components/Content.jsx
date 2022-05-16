import Rating from "./Rating"
import { useState } from "react"

const Content = () => {
  const [rating, setRating] = useState("")
  return (
    <div className="content">
      <Rating rating={rating} setRating={setRating} />
      <div className="question">
        <p>
          {rating === ""
            ? "How would you rate our service?"
            : `Tell us a bit more why you choose ${rating}`}
        </p>
      </div>
      <div className="text">
        <textarea></textarea>
        <button className="btn-98">Submit</button>
      </div>
    </div>
  )
}
export default Content
