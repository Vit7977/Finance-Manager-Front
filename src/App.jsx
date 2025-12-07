import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
