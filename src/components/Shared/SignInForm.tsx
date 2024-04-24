import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label, TextInput } from 'flowbite-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signInSchema } from '../../shemas/signinShema'

type Inputs = {
  email: string
  password: string
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data', data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-md flex-col gap-4 rounded-lg bg-sky-200 p-4"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          {...register('email')}
          color={errors.email ? 'failure' : 'primary'}
          helperText={
            <>
              <span className="font-medium">{errors.email?.message}</span>
            </>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          {...register('password')}
          color={errors.password ? 'failure' : 'primary'}
          helperText={
            <>
              <span className="font-medium">{errors.password?.message}</span>
            </>
          }
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default SignInForm
