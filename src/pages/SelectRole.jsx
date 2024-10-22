import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const SelectRole = () => {
  return (
    <section className='py-4'>
        <h1 className='text-5xl font-bold'> Select your Role</h1 >
        <h2>Please choose whether you are a Farmer or a Buyer to proceed</h2>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>Buyer</h2>
            <p className='mt-2 mb-4'>
            Browse farm-fresh produce, make purchases, and support local farmers
            </p>
            <Link
              to='/get-started-buyer'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Select
            </Link>
          </Card>
          <Card bg='bg-green-100'>
            <h2 className='text-2xl font-bold'>Farmer</h2>
            <p className='mt-2 mb-4'>
            Manage your farm, list produce, and connect with buyers
            </p>
            <Link
              to='/get-started-farmer'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Select
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default SelectRole