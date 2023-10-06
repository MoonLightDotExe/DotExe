import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from './pages/map';

function App() {
  return(<>
  <Router>
    <Routes>
      <Route path="/map" element={<Map/>} />
     </Routes>
  </Router>
    </>)
}

export default App
