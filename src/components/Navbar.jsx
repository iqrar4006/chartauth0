import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import UserContext from '../context/UserContext';




const Navbar = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const {navbarShow,setNavbarShow}=useContext(UserContext)

    const handlCrossClick = () => {
        setNavbarShow(false);
    };

    return (
        <>
            <div className="w-full my-10 px-6">
                <div className='flex md:block justify-between items-center'>
                    <div className=' font-mono text-4xl font-bold text-slate-50'>
                        Board.
                    </div>
                    <div className='text-slate-50 text-4xl md:hidden'>
                        <RxCross1 onClick={handlCrossClick} className='cursor-pointer' />
                    </div>
                </div>


                <div className='flex flex-col mt-6'>
                    <NavLink to="/dashboard" className="font-mono text-xl font-bold text-slate-50 mb-3" >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <MdDashboard />
                            </div>
                            <div>
                                Dashboard
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="text-xl font-thin text-slate-50 mb-3" >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <GrTransaction />
                            </div>
                            <div>
                                Transactions
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="text-xl font-thin text-slate-50 mb-3" >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <MdOutlineCancelScheduleSend />
                            </div>
                            <div>
                                Schedules
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="text-xl font-thin text-slate-50 mb-3" >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <CiUser />
                            </div>
                            <div>
                                Users
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="text-xl font-thin text-slate-50 mb-3" >
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <CiSettings />
                            </div>
                            <div>
                                Setting
                            </div>
                        </div>

                    </NavLink>
                    <NavLink to="#" className="text-xl font-thin text-slate-50" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <CiLogout />
                            </div>
                            <div>
                                Logout
                            </div>
                        </div>

                    </NavLink>
                </div>

                <div className='mt-20'>
                    <NavLink to="#" className=' text-sm font-thin text-slate-50 mb-3' >
                        Help
                    </NavLink>
                    <div >
                    </div>
                    <NavLink to="#" className=' text-sm font-thin text-slate-50' >
                        Contact Us
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Navbar
