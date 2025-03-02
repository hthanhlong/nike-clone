import { Button } from '..'

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container padding-x flex w-full items-center justify-between gap-10 py-16 max-lg:flex-col sm:py-32"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input border-none focus:outline-none focus:ring-0"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
