import React from 'react'
import arrow from '../assets/icons/right-arrow.png'
import canvas from '../assets/material/canvas.jpg'

function ChoosebyCategory() {
  return (
    <>
      <div className='px-10 mt-10 flex flex-col gap-5'>

        <div className='px-5'>
            <h1 className='text-4xl font-extrabold uppercase md:text-left text-center'>Choose by material</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

            <div className='bg-amber-600 w-full h-[80vh] rounded-2xl'>
                <div className='flex relative w-full rounded-2xl h-full'>
                    <img className='w-full rounded-2xl object-cover' src={canvas} alt="" />
                    <div className='absolute rounded-b-2xl bottom-0 w-full bg-black/50 p-6 text-white'>
                        <h1 className='uppercase font-bold text-5xl'>Canvas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni ad ratione laudantium veritatis.</p>
                        <button className='flex justify-between w-full items-center'>
                            <p>Shop Now</p>
                            <img className='bg-amber-50 p-3 rounded-full h-10 w-10' src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-amber-600 w-full h-[80vh] rounded-2xl'>
                <div className='flex relative w-full rounded-2xl h-full'>
                    <img className='w-full rounded-2xl object-cover' src={canvas} alt="" />
                    <div className='absolute rounded-b-2xl bottom-0 w-full bg-black/50 p-6 text-white'>
                        <h1 className='uppercase font-bold text-5xl'>Canvas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni ad ratione laudantium veritatis.</p>
                        <button className='flex justify-between w-full items-center'>
                            <p>Shop Now</p>
                            <img className='bg-amber-50 p-3 rounded-full h-10 w-10' src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-amber-600 w-full h-[80vh] rounded-2xl'>
                <div className='flex relative w-full rounded-2xl h-full'>
                    <img className='w-full rounded-2xl object-cover' src={canvas} alt="" />
                    <div className='absolute rounded-b-2xl bottom-0 w-full bg-black/50 p-6 text-white'>
                        <h1 className='uppercase font-bold text-5xl'>Canvas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni ad ratione laudantium veritatis.</p>
                        <button className='flex justify-between w-full items-center'>
                            <p>Shop Now</p>
                            <img className='bg-amber-50 p-3 rounded-full h-10 w-10' src={arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default ChoosebyCategory
