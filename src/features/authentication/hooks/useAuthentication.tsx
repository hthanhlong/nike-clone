import { useMutation } from '@tanstack/react-query'
import AuthService from '../services'
import { ISignIn } from '../types'
import { useEffect } from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

const useAuthentication = () => {
  const { setAuthData } = useAuthContext()
  const nagivate = useNavigate()
  const { mutateAsync: signInFn, data: signInData } = useMutation({
    mutationFn: (data: ISignIn) => AuthService.SignIn(data),
  })

  useEffect(() => {
    if (signInData) {
      setAuthData(signInData.data)
      nagivate('/')
    }
  }, [signInData, setAuthData, nagivate])

  const signOut = () => {
    // clear local storage
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setAuthData({
      user: null,
      accessToken: null,
      refreshToken: null,
    })
    nagivate('/sign-in')
  }

  return { signInFn, signOut }
}

export default useAuthentication
