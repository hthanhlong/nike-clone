import { Checkbox } from 'flowbite-react'
import { image1, image2 } from '../../assets/images'
import CartItem from '../../components/Shared/CartItem'

const Cart = () => {
  return (
    <div className="flex gap-4 px-4 py-6 max-md:flex-col">
      <div className="left flex-grow rounded-lg bg-gray-100 p-2">
        <div className="header w-full">
          <p className="text-2xl font-semibold">Shopping Bag</p>
          <p className="text-xs text-blue-500">Select all items</p>
          <div className="border-b border-gray-300">
            <p className="text-right text-xs">Price</p>
          </div>
        </div>
        <div className="cart-list max-h-[1200px] overflow-y-auto">
          <CartItem image1={image1} />
          <CartItem image1={image2} />
          <CartItem image1={image2} />
          <CartItem image1={image2} />
        </div>
        <div className="footer py-2 text-right">
          <p className="text-md">Subtotal (2 items) : $120.00</p>
        </div>
      </div>
      <div className="right h-fit w-[300px] rounded-md bg-gray-100 p-4 max-md:w-full">
        <div className="mb-4 text-xs">
          Add $8.51 of eligible items to your order to qualify for FREE Shipping
          (excludes remote locations). Details
        </div>
        <div className="mb-4 text-lg">Subtotal (2 items) : $120.00</div>
        <form className="mb-4 flex items-center">
          <Checkbox />
          <span className="ml-2 text-xs">This order contains a gift</span>
        </form>
        <button className="w-full rounded-md bg-coral-red px-2 py-1 text-white hover:bg-opacity-90">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
