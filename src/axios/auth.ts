import AuthService from '../services/AuthService'
import { SignInInput, SignUpInput } from '../types'

class Auth {
  signUp = (data: SignUpInput) => {
    return AuthService.signUp(data)
  }

  signIn = async (data: SignInInput) => {
    return AuthService.SignIn(data)
  }
}

export default new Auth()
