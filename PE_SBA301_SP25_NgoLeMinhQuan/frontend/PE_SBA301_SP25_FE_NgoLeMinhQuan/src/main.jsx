import { StrictMode } from "react";
import { AuthProvider }  from "./contexts/AuthContext";
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  </StrictMode>,
)
