import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [statistics, setStatistics] = useState({
        totalClients: 1000,
        activeClients: 1000,
        newClients: 200,
      });

    const maxClients = 1000;
    const maxActiveClients = 1500;
    const maxNewClients = 500;


    useEffect(() => {
        const interval = setInterval(() => {
          setStatistics(prevStats => ({
            totalClients: prevStats.totalClients < maxClients ? prevStats.totalClients + 1 : maxClients,
            activeClients: prevStats.activeClients < maxActiveClients ? prevStats.activeClients + 1 : maxActiveClients,
            newClients: prevStats.newClients < maxNewClients ? prevStats.newClients + 1 : maxNewClients,
          }));
        }, 1); 
    
        
        return () => clearInterval(interval);
      }, [maxClients]);
    
      return (
        <div className='w-full h-screen'>
          <div className='bg-gray-300 rounded-3xl m-20 '>
          <div className='flex text-black font-bold text-4xl p-8 items-center justify-center'><h2>Our Business in numbers</h2></div>
          <div className='flex font-semibold justify-between text-black text-3xl p-8'>
          <p >Total Clients :  {statistics.totalClients}</p>
          <p>Active Clients :  {statistics.activeClients}</p>
          <p>New Clients :  {statistics.newClients}</p>
          </div>
        </div>
        </div>
        
      );
    };



export default Stats


