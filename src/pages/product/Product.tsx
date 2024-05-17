import { products } from '../../data/constants'
import { CustomPagination, PopularProductCard } from '../../components'
import { Select, TextInput } from 'flowbite-react'
import { SearchIcon } from '../../components'

const Product = () => {
  return (
    <section className="px-10">
      <div className="flex justify-between">
        <form className="w-1/2">
          <TextInput
            type="text"
            placeholder="Search products"
            className="focus:ring-primary-500 w-full max-w-xs rounded-lg p-4 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring"
            rightIcon={SearchIcon}
          />
        </form>
        <form className="w-1/2">
          <Select id="filter" className="ml-auto w-full max-w-xs">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </Select>
        </form>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard
            key={product.id}
            id={product.id.toString()}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
      <CustomPagination />
    </section>
  )
}

export default Product
