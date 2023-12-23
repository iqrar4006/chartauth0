import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';




const Loginreg = () => {
  let navigate = useNavigate()

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='w-full h-screen custom_gradient'>
        <div className='font-mono md:text-4xl sm:text-2xl font-bold absolute top-10 left-12 text-slate-50'>
          LOGO
        </div>

        <div className='flex items-center justify-center sm:flex-row xs:flex-col w-full h-screen lg:px-8 md:px-4 sm:px-2' >

          <div className='lg:w-1/2 md:w-2/5 sm:w-2/5 xs:w-full xs:pl-12 sm:h-screen xs:h-1/4  flex items-center sm:justify-center font-mono lg:text-8xl sm:text-7xl xs:text-6xl font-bold text-slate-50'>
            Board.
          </div>

          <div className='lg:w-1/2 md:w-3/5 sm:w-3/5 sm:h-screen xs:h-3/4 flex items-center justify-center flex-col'>

            <div className="w-full">
              <p className="font-mono md:text-4xl sm:text-3xl font-bold text-left lg:ml-40 md:ml-40 sm:ml-28 mb-3">Sign In</p>
            </div>

            <div className="w-full">
              <p className="font-mono md:text-2xl sm:text-xl font-bold text-left lg:ml-40 md:ml-40 sm:ml-28 mb-1">Sign in to your account</p>
            </div>
            
            <div className='flex  flex-col mt-2 w-full'>

            <div className="w-full ">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 mb-6 mt-5 lg:ml-40 md:ml-40 sm:ml-28  hover:bg-[#286DE0] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <CiLogin />
                    </div>
                    <div>
                      Login/Registration
                    </div>
                  </div>
                </button>
              </div>
              
              <div className="w-full ">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 mb-10 mt-5 lg:ml-40 md:ml-40 sm:ml-28 hover:bg-[#286DE0] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <FcGoogle />
                    </div>
                    <div>
                      Sign in with Google
                    </div>
                  </div>
                </button>
              </div>

              <div className="w-full">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 lg:ml-40 md:ml-40 sm:ml-28 hover:bg-[#286DE0] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <FaApple />
                    </div>
                    <div>
                      Sign in with Apple
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Loginreg




















// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";



// const Loginreg = () => {
//   const { user, loginWithRedirect, isAuthenticated } = useAuth0();
//   console.log("user", user,isAuthenticated)

//   return (
//     <>
//       <div className='w-full h-screen custom_gradient'>
//         <div className='font-mono text-4xl font-bold absolute top-10 left-12 text-slate-50'>
//           LOGO
//         </div>

//         <div className='flex items-center justify-center w-full h-screen px-8'>

//           <div className='w-1/2 flex items-center justify-center font-mono text-8xl font-bold text-slate-50'>
//             Board.
//           </div>

//           <div className='w-1/2 h-screen flex items-center justify-center flex-col'>

//             <div className="w-full">
//               <p className="font-mono text-4xl font-bold text-left ml-40 mb-3">Sign In</p>
//             </div>

//             <div className="w-full">
//               <p className="font-mono text-2xl font-bold text-left ml-40 mb-1">Sign in to your account</p>
//             </div>
            
//             <div className='flex  flex-col mt-2 w-full'>
//               <div className="w-full ">
//                 <button className='border-slate-100 rounded-md	bg-white text-2xl font-serif px-6 py-2 mb-10 mt-5 ml-40  hover:bg-[#286DE0] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
//                   <div className='flex justify-center items-center'>
//                     <div className='mr-4'>
//                       <FcGoogle />
//                     </div>
//                     <div>
//                       Sign in with Google
//                     </div>
//                   </div>


//                 </button>
//               </div>
//               <div className="w-full">
//                 <button className='border-slate-100 rounded-md	bg-white text-2xl font-serif px-6 py-2 ml-40 hover:bg-[#286DE0] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
//                   <div className='flex justify-center items-center'>
//                     <div className='mr-4'>
//                       <FaApple />
//                     </div>
//                     <div>
//                       Sign in with Apple
//                     </div>
//                   </div>
//                 </button>
//               </div>

//             </div>
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default Loginreg
