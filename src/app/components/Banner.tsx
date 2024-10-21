import React from 'react'
export default function Banner() {
  return (
    <div className='relative overflow-hidden bd-gradient-to-r from-black to-white-700 font-sams px-6 py-12 mb-8'>
      <div className='absolute inset-0 cpacity-20' >
        <img src="https://img.pikbest.com/ai/illus_our/20230413/2c6e94ddf57c48f63b578b5fafa31e6e.jpg!w700wp"
          className='w-full h-full object-covre' />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center '>
        <h2 className='text-white  sm:text-5xl font-bold-blue mb-4'>Discover Our Menu</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>
          Shop Now Your Favourite Delicious Chocolate Cake With Exclusive Discount!</p>
        <button
          type="button"
          className='bg-sky-600 text-white text-sm font-samibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-900 transition duration-300'>
          These Exciting Deals are waiting for you till 31 December 2024
        </button>
      </div>
    </div>
  )
}
