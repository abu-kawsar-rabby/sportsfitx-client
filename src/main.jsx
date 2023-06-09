import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './providers/AuthProviders'
import Font from 'react-font'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Font family='Barlow'>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </Font>
  </React.StrictMode>,
)
