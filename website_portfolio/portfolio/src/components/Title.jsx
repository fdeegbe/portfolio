import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-body'>
        <div className='container mx-auto my-auto text-center text-primary text-2xl'>
            Frank Deegbe
        </div>
        <div className="flex flex-col items-center justify-center">
            <img
                src="src/components/images/Headshot 1.JPG"
                alt="My profile photo"
                className="w-1/4 rounded-full mx-auto"
              />
        </div>
    </div>
  )
}

export default Title
