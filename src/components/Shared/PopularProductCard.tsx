import { Link } from 'react-router-dom'
import RatingStars from './Rating'

const PopularProductCard = ({
  imgURL,
  name,
  price,
  id,
  rating,
  reviews,
}: {
  imgURL: string
  name: string
  price: string
  id: string
  rating: number
  reviews: number
}) => {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:items-center max-sm:justify-center">
      <Link to={`/products/${id}`}>
        <img
          src={imgURL}
          alt={name}
          className="h-[282px] w-[282px] hover:scale-105"
        />
      </Link>
      <div className="mt-8 flex justify-start gap-2.5">
        <RatingStars rating={rating} />
        <p className="font-montserrat text-xs leading-normal text-slate-gray">
          {reviews} reviews
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="font-montserrat text-xs leading-normal text-slate-gray">
        1K+ bought in past month
      </p>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
      <div className="flex gap-2">
        <button className="mt-2 flex w-full items-center justify-center rounded-lg bg-coral-red p-2 text-sm font-medium text-white shadow-sm hover:bg-coral-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-red">
          <span className="text-md font-montserrat leading-normal">
            Add to cart
          </span>
        </button>
        <button className="mt-2 flex w-full items-center justify-center rounded-lg bg-coral-red px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-coral-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-red">
          <span className="text-md font-montserrat leading-normal">
            Buy now
          </span>
        </button>
      </div>
    </div>
  )
}

export default PopularProductCard
