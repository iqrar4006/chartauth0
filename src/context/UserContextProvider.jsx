import React, { useState } from 'react'
import UserContext from './UserContext'



const UserContextProvider = ({children}) => {
    const [navbarShow, setNavbarShow]= useState(false)
  return (
    <>
      <UserContext.Provider value={{navbarShow,setNavbarShow}} >
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
