import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Label, TextInput } from 'flowbite-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signInSchema } from '../../shemas'
import { SignInInput } from '../../types'
import { useMutation } from '@tanstack/react-query'
import Auth from '../../axios/auth'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: yupResolver(signInSchema),
  })

  const { mutateAsync: signInFn } = useMutation({
    mutationFn: (data: SignInInput) => Auth.signIn(data),
  })

  const onSubmit: SubmitHandler<SignInInput> = (data) => signInFn(data)

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
