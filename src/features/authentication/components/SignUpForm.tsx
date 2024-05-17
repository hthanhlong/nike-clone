import { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUpSchema } from '../validations'
import { ISignUp } from '../types'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../services'

function SignUpForm() {
  const [isCanSubmit, setIsCanSubmit] = useState(false)

  const {
    getValues,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: yupResolver(signUpSchema),
  })

  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: (data: ISignUp) => AuthService.signUp(data),
  })

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    const { password, confirmPassword, agree } = data
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: 'Passwords do not match' })
      return
    }
    if (!agree) {
      const message = 'You must agree with the terms and conditions'
      setError('agree', { message })
      return
    }
    await signUpFn(data)
  }

  const handleOnChange = () => {
    const { email, password, confirmPassword, agree } = getValues()
    if (email && password && confirmPassword && !agree) {
      setIsCanSubmit(true)
    } else if (agree === false) {
      setIsCanSubmit(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-md flex-col gap-4 rounded-lg bg-sky-200 p-4"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="name@flowbite.com"
          shadow
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
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          shadow
          color={errors.password ? 'failure' : 'primary'}
          helperText={
            <>
              <span className="font-medium">{errors.password?.message}</span>
            </>
          }
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          shadow
          color={errors.confirmPassword ? 'failure' : 'primary'}
          helperText={
            <>
              <span className="font-medium">
                {errors.confirmPassword?.message}
              </span>
            </>
          }
          {...register('confirmPassword', { required: true })}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="agree"
          className="boreder-2 border-gray-400"
          {...register('agree', { required: true })}
          onChange={handleOnChange}
        />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link
            to="/sign-in"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <div>
        <span className="font-medium text-red-400">
          {errors.agree?.message}
        </span>
      </div>
      <Button disabled={!isCanSubmit} type="submit">
        Register new account
      </Button>
      <Link
        to="/sign-in"
        className="text-sky-600 hover:underline dark:text-sky-500"
      >
        Already have an account? Sign in
      </Link>
    </form>
  )
}
export default SignUpForm
