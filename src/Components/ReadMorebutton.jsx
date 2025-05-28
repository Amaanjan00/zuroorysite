import React from 'react'

function ReadMorebutton(props) {
  return (
    <>
    <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] px-5 py-2 font-medium shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
      {props.text}
    </button>
    </>
  )
}

export default ReadMorebutton
