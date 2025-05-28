import l1 from '../assets/sectionL/i5.png'
import video from '../assets/sectionL/video.mp4'
import ReadMorebutton from './ReadMorebutton'

function SectionL() {
  return (
    <>

    <div className='px-5 lg:px-20 py-10 pb-20 flex-col lg:flex-row flex gap-10 justify-center items-center'>
        <div className='w-85 text-center flex flex-col gap-4 px-5'>
            <img src={l1} className='p-5 rounded-full hover:scale-105 transition-all duration-500' alt="" />
            <div className='flex flex-col gap-3'>
                <h1 className='text-[22px] font-normal'>Designed & Crafted by hand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atenetur, dolor itaque explicabo recusandae.</p>
                <ReadMorebutton text="Read More"/>
            </div>
        </div>
        <div className='w-85 text-center flex flex-col gap-4 px-5'>
            <img src={l1} className='p-5 rounded-full hover:scale-105 transition-all duration-500' alt="" />
            <div className='flex flex-col gap-3'>
                <h1 className='text-[22px] font-normal'>Designed & Crafted by hand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atenetur, dolor itaque explicabo recusandae.</p>
                <ReadMorebutton text="Read More"/>
            </div>
        </div>
        <div className='w-85 text-center flex flex-col gap-4 px-5'>
            <img src={l1} className='p-5 rounded-full hover:scale-105 transition-all duration-500' alt="" />
            <div className='flex flex-col gap-3'>
                <h1 className='text-[22px] font-normal'>Designed & Crafted by hand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atenetur, dolor itaque explicabo recusandae.</p>
                <ReadMorebutton text="Read More"/>
            </div>
        </div>
        <div className='w-85 text-center flex flex-col gap-4 px-5'>
            <img src={l1} className='p-5 rounded-full hover:scale-105 transition-all duration-500' alt="" />
            <div className='flex flex-col gap-3'>
                <h1 className='text-[22px] font-normal'>Designed & Crafted by hand</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atenetur, dolor itaque explicabo recusandae.</p>
                <ReadMorebutton text="Read More"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionL
