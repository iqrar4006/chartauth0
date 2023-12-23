import React, { useContext, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from "react-icons/io";
import Dashboard_header_paper from './Dashboard_header_paper';
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from '../context/UserContext';



const DashboardHeader = ({stats,user}) => {
    const {navbarShow,setNavbarShow}=useContext(UserContext)
    // console.log('navbarShow',navbarShow)

    const handleHamburgerClick = () => {
        setNavbarShow(true);
    };

    return (
        <div className='w-full h-full'>
            <div className='flex justify-between h-1/4'>
                <div className='font-mono text-2xl font-bold'>
                    Dashboard
                </div>
                <div className='flex items-center'>
                    <div className='mr-2 relative xs:hidden sm:block'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='outline-none border-slate-300 bg-slate-50 rounded-md text-base font-serif px-1 py-1 '
                        />
                        <CiSearch className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
                    </div>
                    <IoIosNotificationsOutline className='text-3xl mr-2 cursor-pointer ' />

                    <img className="w-8 h-8 rounded-full cursor-pointer mr-2" src={user.picture} alt={user.name} />
                    <GiHamburgerMenu className='text-3xl md:hidden cursor-pointer' onClick={handleHamburgerClick}/>


                </div>
            </div>
            <div className='w-full flex sm:flex-row xs:flex-col mt-2 h-3/4'>
            <Dashboard_header_paper stats={stats} />
            </div>

        </div>
    );
};

export default DashboardHeader;









// import React from 'react'
// import { CiSearch } from "react-icons/ci";


// const Dashboard_header = () => {
//     return (
//         <>
//             <div className='w-full'>
//                 <div className='flex justify-between'>
//                     <div className='font-mono text-3xl font-bold'>
//                         Dashboard
//                     </div>
//                     <div>
//                         <div className='flex items-center '>
//                             <div className='mr-4'>
//                                 <input type="text" placeholder='Search...' className=' outline-none border-slate-300 bg-slate-50 rounded-md text-1xl font-serif px-2 ' />
//                             </div>
//                             <div>
//                                 <CiSearch />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Dashboard_header
