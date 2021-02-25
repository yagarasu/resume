import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import buildContainer from './services'
import App from './core/App'
import ServiceProvider from './services/ServiceProvider'

const serviceContainer = buildContainer()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ServiceProvider container={serviceContainer}>
        <App />
      </ServiceProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
