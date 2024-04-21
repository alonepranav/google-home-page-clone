import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { IoMdSearch } from 'react-icons/io'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <div className="flex justify-center flex-col items-center h-full mb-36">

        <Image
          unoptimized
          className='h-[6.5rem] w-[17.5rem]'
          src={"/google-logo.png"}
          alt='' width={100} height={100}></Image>

        <div className="w-[37rem] search-div-hover mt-7 border border-slate-300 rounded-full flex justify-center items-center relative overflow-hidden">
          <input type='text' className='w-full h-11 pl-[50px] pr-24 outline-none' />
          <IoMdSearch className='absolute top-3 left-4 text-xl text-slate-400' />
          <Image unoptimized className='absolute top-3 right-5 h-5 w-5' src={"/lense.png"} alt='asdasd' height={10} width={10} />
          <Image unoptimized className='absolute top-2 right-14 h-7 w-7' src={"/mic.webp"} alt='asdasd' height={10} width={10} />
        </div>

        <div className="flex gap-3 items-center mt-7">
          <button className='hover:border hover:border-slate-300 border border-white bg-neutral-50 text-stone-700 px-4 py-2 rounded text-sm'>Google Search</button>
          <button className='hover:border hover:border-slate-300 border border-white bg-neutral-50 text-stone-700 px-4 py-2 rounded text-sm'>I&apos;m Feeling Lucky</button>
        </div>

        <div className='flex gap-2 text-sm items-center mt-7'>
          <p className='text-xs text-stone-600'>Google offered in:</p>
          <a className='text-blue-800' href="#">हिन्दी </a>
          <a className='text-blue-800' href="#">বাংলা </a>
          <a className='text-blue-800' href="#">తెలుగు </a>
          <a className='text-blue-800' href="#">मराठी </a>
          <a className='text-blue-800' href="#">தமிழ் </a>
          <a className='text-blue-800' href="#">ગુજરાતી </a>
          <a className='text-blue-800' href="#">ಕನ್ನಡ </a>
          <a className='text-blue-800' href="#">മലയാളം </a>
          <a className='text-blue-800' href="#">ਪੰਜਾਬੀ </a>
        </div>

      </div>

      <Footer />


    </div>
  )
}
