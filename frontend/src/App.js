import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import { useLoadScript } from '@react-google-maps/api'
import React, { useState, useEffect } from 'react';
import './App.css';
import Acknowledgement from './pages/Acknowledgement/Acknowledgement'
import MapComp from './pages/MapComp'
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4', // Add your API key
  })



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
          <Route
            path='/map'
            // Component={MapComp}
            element={<MapComp />}
          />
          <Route
            path='/login'
            element={<Login/>}
          />
          <Route
            path='/register'
            element={<Register/>}
          />
          


        </Routes>
      </Router>
    </>
  )
}

export default App
