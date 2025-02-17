import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from "./styles/globalStyle";
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <App />
    </Router>
  </React.StrictMode>,
)
