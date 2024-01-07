import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black h-80 border-t   flex-col items-center justify-center '>
    <div className='flex items-center justify-center '>
            <h1 className='  text-orange-500 text-3xl font-semibold cursor-pointer p-8'> <span className='text-white'>4K</span>  Iptv <span className='text-white'>Deutschland</span> </h1>
    </div>
    <div className='flex items-center justify-center'>
    <p className='text-white text-center '>4K Iptv Deutschlan ist die Nr. 1 der IPTV-Anbieter auf dem Markt, <br/> bietet zuverlässige und stabile komplette IPTV-Kanäle <br/>und iptv Streaming Service.</p>
    </div>
    <div className='flex items-center justify-center text-white p-14'>
    Alle Rechte vorbehalten 2019-2023
    </div>
    </div>
  )
}

export default Footer

