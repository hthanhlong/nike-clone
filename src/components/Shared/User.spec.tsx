import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import User from './User'

describe('User', () => {
  test('renders heading', async () => {
    render(<User />)
    expect(screen.getByRole('heading', { name: 'User' })).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<User />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(2)
  })
})
