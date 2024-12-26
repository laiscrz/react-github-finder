import {Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Search from './routes/search/search'
import Home from './routes/home/home'
import Repos from './routes/repos/repos'

function App() {

  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/search" element={<Search />} />  
        <Route path='/repos/:username' element={<Repos />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
