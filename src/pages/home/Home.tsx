import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '../../components'

const Home = () => {
  return (
    <div className="root-layout relative scroll-smooth">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </div>
  )
}

export default Home
