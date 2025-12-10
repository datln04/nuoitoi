import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Transparency from './components/Transparency'
import Commitment from './components/Commitment'
import Invest from './components/Invest'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Transparency />
        <Commitment />
        <Invest />
      </main>
      <Footer />
    </div>
  )
}

export default App
