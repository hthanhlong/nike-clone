import { products } from '../../constants'
import { PopularProductCard } from '..'
import { Link } from 'react-router-dom'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container padding max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.name} to={`/products/${product.id}`}>
            <PopularProductCard key={product.name} {...product} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
