import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Reset from "./pages/Reset"
import NewPassword from "./pages/NewPass"
import SignupOtp from "./pages/SignupOtp"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-otp" element={<SignupOtp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App