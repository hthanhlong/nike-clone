import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons'

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact-us', label: 'Contact Us' },
]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
]

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
]

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: 'Nike Air Jordan-0144',
    price: '$200.20',
    rating: 3.5,
    reviews: 20,
  },
  {
    id: 2,
    imgURL: shoe5,
    name: 'Nike Air Jordan-104',
    price: '$210.20',
    rating: 4,
    reviews: 27,
  },
  {
    id: 3,
    imgURL: shoe6,
    name: 'Nike Air Jordan-120',
    price: '$220.20',
    rating: 4.5,
    reviews: 14,
  },
  {
    id: 4,
    imgURL: shoe7,
    name: 'Nike Air Jordan-00671',
    price: '$230.20',
    rating: 4.5,
    reviews: 14,
  },
  {
    id: 5,
    imgURL: shoe4,
    name: 'Nike Air Jordan-01443',
    price: '$200.20',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 6,
    imgURL: shoe5,
    name: 'Nike Air Jordan-105',
    price: '$210.20',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 7,
    imgURL: shoe6,
    name: 'Nike Air Jordan-170',
    price: '$220.20',
    rating: 2,
    reviews: 12,
  },
  {
    id: 8,
    imgURL: shoe7,
    name: 'Nike Air Jordan-3455',
    price: '$230.20',
    rating: 1,
    reviews: 12,
  },
  {
    id: 9,
    imgURL: shoe7,
    name: 'Nike Air Jordan-453465',
    price: '$230.20',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 10,
    imgURL: shoe4,
    name: 'Nike Air Jordan-01540',
    price: '$200.20',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 11,
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 12,
    imgURL: shoe6,
    name: 'Nike Air Jordan-150',
    price: '$220.20',
    rating: 4.5,
    reviews: 12,
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
]

export const LOCAL_STORAGE_KEY = {
  ID: 'wdXSDDpECBCNgyaF',
  USERNAME: 'Ufwr5+igITVbTmUy',
  IS_LOGGED: 'F7Uk5kTgIn8OcsAD',
  ACCESS_TOKEN: 'jRqUlx1xsPUmj19p',
  REFRESH_TOKEN: 'ymof3KCseoiFaz33',
  SELECTED_ID: 'n81csAKUlx1xsn8O',
  IS_NOTIFICATION: 'n8OcsAKsd1xsn79',
  FLOWBITE_THEME_MODE: 'flowbite-theme-mode',
}
