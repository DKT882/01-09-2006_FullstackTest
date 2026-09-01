import Login from "./features/login/Login"
import Event from './features/events/Event'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
