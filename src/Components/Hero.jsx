
import video from '../assets/sectionL/video.mp4'

function Hero() {
  return (
    <>
    <div className="relative h-[70vh] w-full overflow-hidden shadow-xl">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />


      {/* Hero Content (optional) */}
      <div className="absolute py-15 inset-x-0 bottom-0 z-20 flex flex-col justify-center text-center items-center md:items-start md:text-left text-shadow-lg/50 text-white px-5 md:px-40 md:py-20 md:w-300">
        <h1 className="text-5xl md:text-[70px] font-bold pb-4 uppercase">We have imporved everyday carry</h1>
        <button className="bg-white hover:bg-amber-600 hover:text-white transition-all duration-300 text-2xl text-black px-5 py-2 m-1 rounded-[5px]">
          Explore Now
        </button>
      </div>
    </div>
    </>
  )
}

export default Hero