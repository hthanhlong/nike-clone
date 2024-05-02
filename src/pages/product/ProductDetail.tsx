import { useState } from 'react'
import { Modal } from 'flowbite-react'
import { image1, image2, image3, image4 } from '../../assets/images'
import { Zoom } from '../../components'

const sizes = [6, 7, 8, 9, 10, 11, 12]

export const SizeGuide = ({
  size,
  selectedSize,
  onClick,
}: {
  size: number
  selectedSize: number
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-[200px] cursor-pointer rounded-lg border-[1px] border-black p-2 ${
        selectedSize === size ? 'bg-gray-200' : ''
      }`}
    >
      size: {size}
    </div>
  )
}

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(image1)
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex gap-12 px-10 py-4 max-lg:flex-col">
      <div className="left w-1/3 max-lg:w-full">
        <Zoom height={500} width="100%" zoomScale={3} src={selectedImage} />
        <div className="my-2 text-center text-xs">
          Roll over image to zoom in
        </div>
        <div className="flex w-full justify-between gap-4">
          <img
            onClick={() => setSelectedImage(image1)}
            src={image1}
            alt="product"
            draggable={false}
            className={`${selectedImage === image1 ? 'border-2 border-black' : ''} h-[100px] w-[100px] cursor-pointer hover:opacity-50`}
          ></img>
          <img
            onClick={() => setSelectedImage(image2)}
            src={image2}
            alt="product"
            draggable={false}
            className={`${selectedImage === image2 ? 'border-2 border-black' : ''} h-[100px] w-[100px] cursor-pointer hover:opacity-50`}
          ></img>
          <img
            onClick={() => setSelectedImage(image3)}
            src={image3}
            alt="product"
            draggable={false}
            className={`${selectedImage === image3 ? 'border-2 border-black' : ''} h-[100px] w-[100px] cursor-pointer hover:opacity-50`}
          ></img>
          <img
            onClick={() => setSelectedImage(image4)}
            src={image4}
            alt="product"
            draggable={false}
            className={`${selectedImage === image4 ? 'border-2 border-black' : ''} h-[100px] w-[100px] cursor-pointer hover:opacity-50`}
          ></img>
        </div>
      </div>
      <div className="right w-2/3 max-lg:w-full">
        <h1 className="text-4xl font-bold">Nike Air Max Dn</h1>
        <p>Shoe</p>
        <p className="my-5 text-sm">$100</p>
        <div>
          <div className="mb-2 flex justify-between">
            <p>Select Size</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nike.com/ca/size-fit/unisex-footwear-mens-based"
              className="text-xs text-gray-500"
            >
              Size Guide
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <SizeGuide
                key={size}
                size={size}
                selectedSize={selectedSize}
                onClick={() => setSelectedSize(size)}
              />
            ))}
          </div>
        </div>
        <button className="mt-8 w-full max-w-xs rounded-lg  bg-coral-red p-2 text-white">
          Add to cart
        </button>
        <p className="mt-8">
          Say hello to the next generation of Air technology. The Air Max Dn
          features our Dynamic Air unit system of dual-pressure tubes, creating
          a reactive sensation with every step. This results in a futuristic
          design that's comfortable enough to wear from day to night. Go
          ahead—Feel The Unreal. Colour Shown: Pure Platinum/White/Black/Hyper
          Royal Style: DV3337-005
        </p>
        <button
          onClick={() => setOpenModal(true)}
          className="mt-8 block border-b-2 border-gray-500 leading-normal transition-all hover:scale-105 hover:text-gray-500 hover:no-underline"
        >
          View product details
        </button>
      </div>
      <>
        <Modal size="3xl" show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p>
                Say hello to the next generation of Air technology. The Air Max
                Dn features our Dynamic Air unit system of dual-pressure tubes,
                creating a reactive sensation with every step. This results in a
                futuristic design that's comfortable enough to wear from day to
                night. Go ahead—Feel The Unreal.
              </p>
              <p>
                Maxxed Out motion Our Dynamic Air unit system features 2 sets of
                dual-pressure tubes. With the firmest amount of pressure in the
                heel and the softest amount of pressure towards your midfoot,
                the air levels shift within each set for a smooth transition as
                you step.
              </p>
              <p>
                Maxxed Out comfort The multi-layered mesh on the upper feels
                lightweight and breathable, with a haptic print for a textured
                look. Plush foam surrounds the cushioning system for an enhanced
                feel that's uniquely soft and supportive.
              </p>
              <p>
                Maxxed Out energy Providing comfort from top to bottom, this
                tactile design boasts performance-level bounce to energise your
                every move. After all, who said going to a concert isn't a
                sport?
              </p>
              <p>
                Product details Matt accents Foam midsole Rubber outsole Not
                intended for use as personal protective equipment (PPE) Colour
                Shown: Pure Platinum/White/Black/Hyper Royal Style: DV3337-005
                Country/Region of Origin: Vietnam
              </p>
              <p>
                Nike Air Max Origins Revolutionary Air technology first made its
                way into Nike footwear in 1978. In 1987, the Air Max 1 debuted
                with visible Air technology in its heel, allowing fans more than
                just the feel of Air cushioning—suddenly they could see it.
                Since then, next-generation Air Max shoes have become a hit with
                athletes and collectors by offering striking colour combinations
                and reliable, lightweight cushioning.
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  )
}

export default ProductDetail
