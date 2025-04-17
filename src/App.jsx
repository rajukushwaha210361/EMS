import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalstroage } from './utils/LocalStorage'
import { getLocalstroage } from './utils/LocalStorage'
import { useEffect } from 'react'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);

  // useEffect(() => {
  //   setLocalstroage(); 
  // },)

  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser)
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData)
      setUser(userData.role);
      setLoggedUserData(userData.data);
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee')
        setLoggedUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
      else {
        alert("please enter the correct Email and Password");
      }
    }
  }

  // console.log(authData.employees)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedUserData} role={user} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedUserData} role={user} /> : '')}
    </>
  )
}

export default App

