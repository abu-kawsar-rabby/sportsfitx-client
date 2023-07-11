import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './providers/AuthProviders'
// import Font from 'react-font'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Font family='Barlow'> */}
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router}>
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
    {/* </Font> */}
  </React.StrictMode>,
)
