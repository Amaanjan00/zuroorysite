import { useState } from 'react'
import logo from '../assets/Logo/zuroory-logo-text.png'
import close from '../assets/header/close.png'
import menu from '../assets/header/menu.png'
import search from '../assets/header/search.png'
import smlogo from '../assets/Logo/z-logo.png'

function Header() {

    const [head, setHead] = useState(false)

  return (
    <>

    <div className='h-10 bg-amber-600 lg:flex justify-center items-center text-[18px] pr-10 text-white hidden'>
        <p className='uppercase'>We ship pan India! | 10% off on all bags!</p>
    </div>

    <header className="lg:flex hidden justify-between items-center p-2 pl-10">


        <nav className='hidden sm:flex justify-center align-middle items-center text-black/65 gap-15'>

            <div className='w-40 py-2 h-full flex flex-row'>
                <img className='object-contain' src={logo} alt="zuroory logo" />
            </div>

            <ul className='text-[14px] font-normal uppercase list-none flex gap-10'>
                <li>
                    <a className='hover:text-amber-600' href="">Featured</a>
                </li>
                <li>
                    <a className='hover:text-amber-600' href="">Bags & Luggage</a>
                </li>
                <li>
                    <a className='hover:text-amber-600' href="">Wallets</a>
                </li>
                <li>
                    <a className='hover:text-amber-600' href="">Accessories</a>
                </li>
                <li>
                    <a className='hover:text-amber-600' href="">About Us</a>
                </li>
                <li>
                    <a className='hover:text-amber-600' href="">Contact</a>
                </li>
            </ul>
        </nav>


        <div className='flex gap-5 pr-10 text-gray-400'>
            <button>Cart</button>
            <button onClick={() => setHead(false)}>Find In-store</button>
            <button onClick={() => setHead(true)} className='text-amber-400'>Need help?</button>
        </div>
    </header>


    <header className="flex z-99999 sticky top-0 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:hidden flex-row-reverse justify-between items-center px-6">

        <div className='w-5'>
            <img src={search} alt="" />
        </div>

        <nav className='flex justify-center align-middle items-center gap-10'>
            <div className='w-16 h-16 flex flex-row'>
                <img className='object-contain' src={smlogo} alt="zuroory logo" />
            </div>
        </nav>

        <div className='flex h-5'>
            <img onClick={() => setHead(true)} src={menu} alt="" />
        </div>

    </header> 

    {
        head &&

        <div className='w-[100vw] h-[100vh] top-0 fixed bg-white z-99999'>

            <div className='h-30 px-8 pt-0 w-full flex justify-between flex-row'>
                    <img className='w-45 object-contain' src={logo} alt="zuroory logo" />
                    <img onClick={() => setHead(false)} className='w-7 object-contain' src={close} alt="zuroory logo" />
            </div>

            <nav className='flex px-10 mt-0 mx-7 rounded-3xl py-15 justify-start align-middle items-center gap-10 shadow-[0_0px_70px_-15px_rgba(0,0,0,0.1)] bg-white'>

                <ul className='list-none w-50 justify-start flex-col flex gap-11'>
                    <li>
                        <a className='hover:text-amber-600' href="">Featured</a>
                    </li>
                    <li>
                        <a className='hover:text-amber-600' href="">Bags & Luggage</a>
                    </li>
                    <li>
                        <a className='hover:text-amber-600' href="">Wallets</a>
                    </li>
                    <li>
                        <a className='hover:text-amber-600' href="">Accessories</a>
                    </li>
                    <li>
                        <a className='hover:text-amber-600' href="">About Us</a>
                    </li>
                    <li>
                        <a className='hover:text-amber-600' href="">Contact</a>
                    </li>
                </ul>
            </nav>

        </div>
    }
    </>
  )
}

export default Header
