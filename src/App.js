import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Home, ForgotPassword, SignUp, Video, Profile} from "pages"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} /> {/*Create*/}
        <Route path="/forgot-password/" element={<ForgotPassword />} />
        {/* HomeCreate*/}
        <Route path="/sign-up" element={<SignUp />} /> {/* Create */}
        <Route path="/Video" element={<Video />} /> 
        <Route path="/Profile/" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
