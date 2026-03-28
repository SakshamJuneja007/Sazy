import React from 'react'

const Tittle = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 text-center justify-center items-center mb-3'>
        <p className='text-gray-500'>{text1}<span className='text-gray-700 font-medium item-center text-center'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 item-center text-center'></p>

    </div>
  )
}

export default Tittle