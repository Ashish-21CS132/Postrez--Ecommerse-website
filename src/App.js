// import './App.css';

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Productdetails from './pages/Productdetails'
import Collection from './pages/Collection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productid" element={<Productdetails />} />
          <Route path="/collection/:collectionid" element={<Collection />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
