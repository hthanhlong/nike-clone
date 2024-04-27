import { TextInput, Checkbox } from 'flowbite-react'
import { trash, heart, share } from '../../assets/icons'

const CartItem = ({ image1 }: { image1: string }) => {
  return (
    <div className="m-2 flex items-center gap-4 border-b-[2px] border-gray-200 py-4">
      <Checkbox className="focus:outline-none focus:ring-0" />

      <img src={image1} alt="product" className="h-24 w-24" />

      <div className="flex-1">
        <p className="w-full min-w-[100px] max-w-lg text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="action flex gap-4 py-2">
          <button className="text-xs text-blue-500">
            <TextInput type="number" max={20} min={1} defaultValue={1} />
          </button>
          <button className="text-[12px] text-blue-500">
            <img src={trash} alt="delete" className="h-4 w-4" />
          </button>
          <button className="text-[12px] text-blue-500">
            <img src={heart} alt="save" className="h-4 w-4" />
          </button>
          <button className="text-[12px] text-blue-500">
            <img src={share} alt="share" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="w-[100px text-right text-sm">$1540</p>
    </div>
  )
}

export default CartItem
