import { star } from '../../assets/icons'
import { Link } from 'react-router-dom'

const PopularProductCard = ({
  imgURL,
  name,
  price,
  id,
}: {
  imgURL: string
  name: string
  price: string
  id: string
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
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
      <button className="mt-2 flex items-center justify-center rounded-lg bg-coral-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-coral-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-red">
        <span className="font-montserrat text-lg font-semibold leading-normal">
          Add to cart
        </span>
      </button>
    </div>
  )
}

export default PopularProductCard
