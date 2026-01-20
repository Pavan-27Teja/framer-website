import React from 'react'

function AppLayout({children}) {
  return (
    <div className='bg-[#FBFCFA] pt-4'>
        <div className='relative bg-[#FBFCFA] mx-4  rounded-xl min-h-screen overflow-hidden'>
        <video
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full rounded-md h-full object-cover top-0 left-0'>
        <source src="src\assets\bg-video.mp4" type="video/mp4" />
        
      </video>

    
    <div className='min-h-screen relative z-10  w-full mx-auto'> 

        {children}
        </div>
    </div>
    </div>
    
  )
}

export default AppLayout