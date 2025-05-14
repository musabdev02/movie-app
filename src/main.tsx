import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// context
import { AlertProvider } from './context/AlertContext.tsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AlertProvider>
  </StrictMode>,
)
