import React from 'react'

function Navbar() {
  return (
    <div className='flex px-6 items-center max-w-full bg-[#FBFCFA] justify-between p-2  text-black rounded-b-xl'>
        <div className='text-2xl font-bold'>Zaneta Consultancy</div>
        <div className='flex align-center gap-5'>
            <div>find a job</div>
            <div>for talent</div>
            <div>for employer</div>
            <div>about us</div>
        </div>

    </div>
  )
}

export default Navbar