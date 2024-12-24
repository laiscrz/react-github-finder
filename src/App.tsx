import {Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Search from './routes/search/search'
import Home from './routes/home/home'

function App() {

  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/search" element={<Search />} />  
      </Routes>
      <Footer />
    </>
  )
}

export default App
