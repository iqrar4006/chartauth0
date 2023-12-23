import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar';
import Dashboard_data from './Dashboard_data';
import UserContext from '../context/UserContext';


const Dashboard = () => {
    
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const {navbarShow,setNavbarShow}= useContext(UserContext)
  // console.log('navbarShow',navbarShow)
  const hiddenNavbar='hidden md:block w-[50%] md:w-1/4 h-screen absolute md:static bg-[#286DE0] rounded-3xl mr-4 z-30 '
  const showNavbar='md:block w-[50%] md:w-1/4 h-screen absolute md:static bg-[#286DE0] rounded-3xl mr-4 z-30 '
  return (
    <>
{/* hidden */}

    <div className="w-full h-screen flex p-4 ">
        <div className={navbarShow?showNavbar:hiddenNavbar}>
            <Navbar />
        </div>
        <div className='w-full relative md:w-3/4 z-20'>
            <Dashboard_data />
        </div>

    </div>



    </>
  )
}

export default Dashboard
