import { Rating } from 'flowbite-react'

function RatingStars({ rating }: { rating: number }) {
  return (
    <Rating>
      <Rating.Star filled={rating >= 1} />
      <Rating.Star filled={rating >= 2} />
      <Rating.Star filled={rating >= 3} />
      <Rating.Star filled={rating >= 4} />
      <Rating.Star filled={rating >= 5} />
    </Rating>
  )
}
export default RatingStars
