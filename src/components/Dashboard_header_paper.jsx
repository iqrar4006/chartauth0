import React from 'react'
// import { FaBitcoin } from "react-icons/fa";


const Dashboard_header_paper = ({stats}) => {
  return (
    <>
      <div className='bg-white border border-gray-300 shadow-md p-2 rounded-xl xs:w-full sm:w-1/4  mr-2 xs:flex justify-around items-center sm:block xs:h-1/4 sm:h-full xs:mb-px'>
       {/* <FaBitcoin className='text-amber-300' /> */}
        <p className='font-mono sm:my-1'>TotalCoins </p>
        <p className='font-mono font-bold'>{stats?.totalCoins}</p> 
      </div>

      <div className='bg-white border border-gray-300 shadow-md p-2 rounded-xl xs:w-full sm:w-1/4 mr-2 xs:flex justify-around items-center sm:block xs:h-1/4 sm:h-full xs:mb-px'>
       {/* <FaBitcoin className='text-amber-300' /> */}
        <p className='font-mono sm:my-1'>TotalExchanges </p>
        <p className='font-mono font-bold'>{stats?.totalExchanges}</p>
      </div>

      <div className='bg-white border border-gray-300 shadow-md p-2 rounded-xl xs:w-full sm:w-1/4 mr-2 xs:flex justify-around items-center sm:block xs:h-1/4 sm:h-full xs:mb-px'>
       {/* <FaBitcoin className='text-amber-300' /> */}
        <p className='font-mono sm:my-1'>TotalMarkets </p>
        <p className='font-mono font-bold'>{stats?.totalMarkets}</p>
      </div>

      <div className='bg-white border border-gray-300 shadow-md p-2 rounded-xl xs:w-full sm:w-1/4 xs:flex justify-around items-center sm:block xs:h-1/4 sm:h-full xs:mb-px'>
       {/* <FaBitcoin className='text-amber-300' /> */}
        <p className='font-mono sm:my-1'>Total24hVolume </p>
        <p className='font-mono font-bold'>{stats?.total24hVolume}</p>
      </div>
    </>
  )
}

export default Dashboard_header_paper
