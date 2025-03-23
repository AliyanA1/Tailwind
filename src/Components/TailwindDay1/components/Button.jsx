import React from 'react'

const Button = () => {
  return (
    <button 
    onClick={()=> alert('day 1 complete')}
    className='mt-2 px-2 py-2
     text-white font-mono shadow-md
      bg-blue-500 hover:bg-blue-600 rounded-lg'>
        Click me
    </button>
  )
}

export default Button