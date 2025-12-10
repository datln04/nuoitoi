import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Transparency from './components/Transparency'
import Commitment from './components/Commitment'
import Invest from './components/Invest'
import Footer from './components/Footer'
import Comparison from './components/Comparison'
import QRModal from './components/QRModal'

function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const openQR = () => setIsQRModalOpen(true);

  return (
    <div className="app">
      <Navbar onDonate={openQR} />
      <main>
        <Hero onDonate={openQR} />
        <Story />
        <Comparison />
        <Transparency />
        <Commitment />
        <Invest onDonate={openQR} />
      </main>
      <Footer />
      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </div>
  )
}

export default App
