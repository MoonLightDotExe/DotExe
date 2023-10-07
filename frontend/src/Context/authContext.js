import React from 'react'
import { createContext, useState } from 'react'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [userData, setUserData] = useState()
  const [data, setData] = useState([])
  const [reports, setReports] = useState({
    id: '',
    position: {
      lat: -3.75,
      lng: -38.52,
    },
    label: '',
  })

  const registerUser = async (name, email, pass, address) => {
    if (!name || !email || !pass || !address) {
      console.log('ERROR')
    } else {
      const body = new URLSearchParams()
      body.append('name', name)
      body.append('email', email)
      body.append('password', pass)
      body.append('password', address)

      const response = await fetch(`http://localhost:5000/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      })

      const data = await response.json()
      console.log(data)
    }
  }

  const loginUser = async (email, pass) => {
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', pass)

    const response = await fetch(`http://localhost:5000/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })

    const data = await response.json()
    console.log(data)
    if (data.message === 'Invalid Credentials') {
      // setSuccess(true)
    }
  }

  const updateLocationData = async (lat, long) => {
    try {
      setUserData({ name: 'Om Amonkar' })
      console.log(lat + long)
      const body = new URLSearchParams()
      body.append('name', userData.name)
      body.append('lat', lat)
      body.append('long', long)

      const response = await fetch(
        `http://localhost:5000/api/test/updateData`,
        {
          method: 'POST',
          body: body,
        }
      )

      const data = await response.json()

      setData(data.data)

      // console.log(services)
    } catch (err) {
      console.log(err)
    }
  }

  const activeReports = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/test/active_projects'
      )
      const data = await response.json()
      const reports_new = data.reports
      let final = []
      reports_new.forEach((report) => {
        const newReport = {
          id: '',
          position: {
            lat: report.location.lat,
            lng: report.location.long,
          },
          label: '',
        }
        final.push(newReport)
      })
      console.log(final)
      setReports(final)
      console.log(reports)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <authContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        isAdmin,
        setIsAdmin,
        registerUser,
        loginUser,
        updateLocationData,
        data,
        activeReports,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default authContext
