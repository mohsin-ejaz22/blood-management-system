import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './pages/user/UserContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>,
)
