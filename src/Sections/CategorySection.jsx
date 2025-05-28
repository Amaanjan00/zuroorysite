import React from 'react'
import brief from '../assets/Category/brief.jpg'
import wallet from '../assets/Category/wallet.jpg'
import sling from '../assets/Category/sling.jpg'
import totes from '../assets/Category/totes.jpg'

function CategorySection() {
  return (
    <>

        <div className='flex justify-center items-center gap-2 px-5 md:gap-5'>
            <span className='text-9xl text-amber-700 italic'>-</span>
            <h1 className='uppercase font-bold text-center text-3xl md:text-5xl py-10'>Find out what suits you</h1>
            <span className='text-9xl text-amber-700 italic'>-</span>
        </div>


      <div className='grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-10 md:py-7 md:px-20'>
        
        <div className='relative w-full h-[55vh] hover:scale-102 duration-500 inset-shadow-black'>

            <div className='w-full h-full'>
                <img className='w-full h-full object-cover shadow-xl' src={brief} alt="" />
            </div>

            <div className='absolute m-5 inset-x-0 bottom-0 z-10'>
                <h1 className='text-6xl font-extrabold uppercase text-white'>Backpacks</h1>
            </div>

        </div>

        <div className='relative w-full h-[55vh] hover:scale-102 duration-500'>

            <div className='w-full h-full'>
                <img className='w-full h-full object-cover shadow-xl' src={sling} alt="" />
            </div>

            <div className='absolute m-5 inset-x-0 bottom-0 z-10'>
                <h1 className='text-6xl font-extrabold uppercase text-white'>Sling Bags</h1>
            </div>

        </div>

        <div className='relative w-full h-[55vh] hover:scale-102 duration-500'>

            <div className='w-full h-full'>
                <img className='w-full h-full object-cover shadow-xl' src={wallet} alt="" />
            </div>

            <div className='absolute m-5 inset-x-0 bottom-0 z-10'>
                <h1 className='text-6xl font-extrabold uppercase text-white'>Wallets</h1>
            </div>

        </div>

        <div className='relative w-full h-[55vh] hover:scale-102 duration-500'>

            <div className='w-full h-full'>
                <img className='w-full h-full object-cover shadow-xl' src={totes} alt="" />
            </div>

            <div className='absolute m-5 inset-x-0 bottom-0 z-10'>
                <h1 className='text-6xl font-extrabold uppercase text-white'>Totes</h1>
            </div>

        </div>

      </div>
    </>
  )
}

export default CategorySection
