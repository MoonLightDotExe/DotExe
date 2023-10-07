import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import { useLoadScript } from '@react-google-maps/api'

import './App.css';
import Acknowledgement from './pages/Acknowledgement/Acknowledgement'
import MapComp from './pages/MapComp'
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  const { loggedIn,
    setLoggedIn,
    isAdmin,
    setIsAdmin,
    registerUser,
    loginUser, } = useContext(authContext)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4', // Add your API key
  })



  return (
    <>
      <Router>
        <Routes>
          {isAdmin && <Route
            path='/admin'
            Component={Admin}
            element={<Admin />}
          />
          <Route
            path='/ack'
            Component={Acknowledgement}
            element={<Acknowledgement />}
          />
          <Route
            path='/map'
            // Component={MapComp}
            element={<MapComp />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
