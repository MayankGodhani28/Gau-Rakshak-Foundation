import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Contact from './components/contact/Contact'
import Donate from './components/donate/Donate'
import Feedback from './components/feedback/Feedback'
import Shop from './components/shop/Shop'
import Footer from './components/Footer'
import Login from './components/user/Login'
import SignUp from './components/user/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
