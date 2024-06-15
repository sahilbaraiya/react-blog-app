import React, { useEffect } from 'react'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const logoutHandler = () => {
      authService.logout().then(() => {
          dispatch(logout())
          navigate('/login')
          
      })
      
      
  }
return (
  <button
  className=' inline-bock px-6 py-3 duration-200 hover:bg-red-500 rounded-md active:bg-gray-700'
  onClick={logoutHandler}
  >Logout</button>
)
}

export default LogoutBtn