import React from 'react'

const Heading = (props) => {
  return (
        <div className='py-20'>
            <div className='w-fit mx-auto'>
                <h2 className='text-5xl font-bold'>{props.highlight}</h2>
                <div className='w-99 h-1 bg-orange-300 md:mt-5  mt-3 ml-auto'></div>
            </div>

        </div>
   
  )
}

export default Heading