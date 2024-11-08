import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import HomePage from "./components/Home"
import MemoriesPage from "./components/Memories"
import MessagePage from "./components/Message"

function App() {
  return (
   <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memories" element={<MemoriesPage />} />
      <Route path="/message" element={<MessagePage />} />
    </Routes>
   </div>
  )
}

export default App
