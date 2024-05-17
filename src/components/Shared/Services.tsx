import { services } from '../../data/constants'
import { ServiceCard } from '..'

const Services = () => {
  return (
    <section className="max-container padding-x flex flex-wrap justify-center gap-9 py-10 max-sm:flex-col">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services
