import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import '../index.css'
const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner"  className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden' />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-16 md:pb-0 px-4 md:pl-12 lg:pl-16 xl:pl-24">
        <h1 className="text-zinc-600 dark:text-zinc-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-tight font-bold mb-4 md:mb-6">
          Freshness You can Trust, Savings you will love!!
        </h1>

      <div className='flex flex-col sm:flex-row items-center mt-4 md:mt-6 font-medium gap-3 sm:gap-4'>
        <Link to={'/products'} className='group flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 transition text-white cursor-pointer rounded-3xl bg-green-400 hover:bg-green-300 text-sm sm:text-base w-full sm:w-auto'>
          Shop now
          <img className='md:hidden transition group-hover:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
        </Link>
         <Link to={'/products'} className='group hidden md:flex items-center gap-3 px-8 py-3 cursor-pointer rounded-3xl bg-green-400 hover:bg-green-300 text-zinc-800 dark:text-zinc-200 font-medium transition text-sm lg:text-base'>
          Explore deals
          <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
