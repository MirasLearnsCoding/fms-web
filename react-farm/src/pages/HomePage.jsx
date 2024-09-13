import React from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <Link
        to='/select-role'
        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
    >
        Register
    </Link>
  )
}

export default HomePage