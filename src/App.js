import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Home, ForgotPassword, SignUp, Video} from "pages"
import Navbar from "components/Navbar"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} /> {/*Create*/}
        <Route path="/forgot-password/" element={<ForgotPassword />} />
        {/* HomeCreate*/}
        <Route path="/sign-up" element={<SignUp />} /> {/* Create */}
        <Route path="/Video" element={<Video />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
