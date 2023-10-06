import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'

import './App.css'
import Acknowledgement from './pages/Acknowledgement/Acknowledgement'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/admin'
            Component={Admin}
            element={<Admin />}
          />
          <Route
            path='/ack'
            Component={Acknowledgement}
            element={<Acknowledgement />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
