import Dashboard_header from './Dashboard_header'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard_chart from './Dashboard_chart';
import Dashboard_footer from './Dashboard_footer';


const Dashboard_data = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [user_data, setUserData] = useState([]);
    const [stats, setStats] = useState({})
    // console.log("user_data",user_data)

    useEffect(() => {
        const headers = {
            'X-RapidAPI-Key': '8756d6c9a4msh6b8b290b0ebac50p10dc55jsn5dcec37a03d9',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        };
        // Axios GET request
        axios.get('https://coinranking1.p.rapidapi.com/coins?limit=5', { headers })
            .then(response => {
                // Set the data in the state
                setStats(response.data.data.stats)
                setUserData(() => response.data.data.coins.map(coin => ({
                    'name': coin.name,
                    'rank': coin.rank,
                    'price': Math.round(coin.price)
                })))

            })
            .catch(error => {
                // Set the error in the state
                // setError(error);
                console.log('error')
            });
    }, []);
    //   console.log('stats',stats)


    return (
        <>
            <div className='flex flex-col h-full'>
                <div className='w-full h-[20%] mb-4'>
                    <Dashboard_header stats={stats} user={user} />
                </div>

                <div className='w-full h-[55%]  border border-gray-300 shadow-md  rounded-xl mb-2'>
                    <Dashboard_chart user_data={user_data} />
                </div>

                <div className='w-full h-[25%] border border-gray-300 shadow-md  rounded-xl'>
                    <Dashboard_footer />
                </div>

            </div>
        </>
    )
}

export default Dashboard_data
