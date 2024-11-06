import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import HomePage from "./components/Home"
import MemoriesPage from "./components/Memories"
import MediaPage from "./components/Media"

function App() {
  return (
   <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memories" element={<MemoriesPage />} />
      <Route path="/media" element={<MediaPage />} />
    </Routes>
   </div>
  )
}

export default App
