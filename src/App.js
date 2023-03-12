import React from 'react'
import { Router, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'

const App = () => {
  return (

<>         
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
      </>
	 
  )
}

export default App