import { StrictMode } from 'react'
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
