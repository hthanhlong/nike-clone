import { TextInput } from 'flowbite-react'
import { SearchIcon } from '../../components'

const _data = [
  {
    title: 'Dispatch & delivery & order',
    questions: [
      'How do I get free delivery on Nike orders?',
      "What are Nike's delivery options?",
      'Can my Nike order be dispatched internationally?',
    ],
  },
  {
    title: 'Returns & product info',
    questions: [
      "What is Nike's returns policy?",
      'How do I return my Nike order?',
      'Where is my refund?',
    ],
  },
  {
    title: 'Nike Membership',
    questions: [
      'What is Nike Membership?',
      'How do I become a Nike Member?',
      'How do I get the most out of NRC and NTC?',
    ],
  },
]

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
            theme={{
              field: {
                input: {
                  base: '!border-none !outline-none focus:!outline-none focus:!ring-0 w-full my-8',
                },
              },
            }}
          />
        </form>
      </div>
      <div className="mx-auto mt-10 h-[1px] w-full bg-black"></div>
      <div className="mx-auto mb-8 mt-10 flex justify-between px-10">
        {_data.map((item) => (
          <div key={item.title}>
            <p className="text-xl font-bold">{item.title}</p>
            {item.questions.map((question) => (
              <p className="my-2" key={question}>
                {question}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContractUs
