
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes'
import React from 'react'
import { Header } from './shared/components/header/Header'

export const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>

        <AppRoutes/>
      </BrowserRouter>
    </React.Fragment>

  )
}

export default App
