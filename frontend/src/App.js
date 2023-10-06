import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Admin" Component={Admin} element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
