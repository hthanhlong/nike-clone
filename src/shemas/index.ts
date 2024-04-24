import * as yup from 'yup'

export const signInSchema = yup
  .object({
    email: yup.string().email('Invalid email address').required(),
    password: yup.string().required(),
  })
  .required()

export const signUpSchema = yup
  .object({
    email: yup.string().email('Invalid email address').required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    agree: yup.boolean().required(),
  })
  .required()
