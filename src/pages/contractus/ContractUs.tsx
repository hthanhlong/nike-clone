import { TextInput } from 'flowbite-react'
import { SearchIcon } from '../../components'

const ContractUs = () => {
  return (
    <div>
      <div className="mx-auto mt-20 max-w-lg text-center">
        <p className="text-3xl font-bold">GET HELP</p>
        <form>
          <TextInput
            type="text"
            placeholder="What can we help you with?"
            rightIcon={SearchIcon}
          />
        </form>
      </div>
      <div className="mx-auto mt-10 h-[2px] w-[100px] bg-black"></div>
      <div className="mx-auto mt-10 flex justify-between px-10">
        <div>
          <p className="text-xl font-bold">Dispatch & delivery & order</p>
          <p>How do I get free delivery on Nike orders?</p>
          <p>What are Nike's delivery options?</p>
          <p>Can my Nike order be dispatched internationally?</p>
        </div>
        <div>
          <p className="text-xl font-bold">Returns & product info</p>
          <p>What is Nike's returns policy?</p>
          <p>How do I return my Nike order?</p>
          <p>Where is my refund?</p>
        </div>
        <div>
          <p className="text-xl font-bold">Nike Membership</p>
          <p>What is Nike Membership?</p>
          <p>How do I become a Nike Member?</p>
          <p>How do I get the most out of NRC and NTC?</p>
        </div>
      </div>
    </div>
  )
}

export default ContractUs
