import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard_chart = ({ user_data }) => {
    // console.log("user_data", user_data)

    return (
        <>
            <ResponsiveContainer >
                <BarChart
                    data={user_data}
                    // margin={{top: 5, right: 5,left: 5, bottom: 5, }}
                >
                    <CartesianGrid strokeDasharray="1 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#f87171" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default Dashboard_chart
