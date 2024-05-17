import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signInSchema } from '../validations'
import { ISignIn } from '../types'
import useAuthentication from '../hooks/useAuthentication'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(signInSchema),
  })

  const { signInFn } = useAuthentication()

  return (
    <form
      onSubmit={handleSubmit((data) => signInFn(data))}
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
          {...register('email', { required: true })}
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
          {...register('password', { required: true })}
          color={errors.password ? 'failure' : 'primary'}
          helperText={
            <>
              <span className="font-medium">{errors.password?.message}</span>
            </>
          }
        />
      </div>
      <Button type="submit">Submit</Button>
      <Link
        to="/sign-up"
        className="text-sky-600 hover:underline dark:text-sky-500"
      >
        Don't have an account? Sign up
      </Link>
    </form>
  )
}

export default SignInForm
