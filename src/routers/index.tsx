import {
  Admin,
  Cart,
  Checkout,
  ContractUs,
  ErrorPage,
  Home,
  Order,
  Product,
  ProductDetail,
  Setting,
  SignIn,
  SignUp,
  Transaction,
} from '../pages'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

const routes = [
  {
    element: <UnprotectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/products',
        element: <Product />,
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/contact-us',
        element: <ContractUs />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/settings',
        element: <Setting />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/orders',
        element: <Order />,
      },
      {
        path: '/transactions',
        element: <Transaction />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
