import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/Index.scss'
import LandingPage from './LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
