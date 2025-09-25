import React from 'react'
import {  categories } from '../assets/assets'
import { useAppContext } from '../context/Appcontext'

const Categories = () => {
  const {navigate} =useAppContext()

  // Map bgColor to Tailwind classes with dark variants
  const getBgClasses = (bgColor) => {
    const colorMap = {
      "#FEF6DA": "bg-yellow-50 dark:bg-yellow-900",
      "#FEE0E0": "bg-red-50 dark:bg-red-900",
      "#F0F5DE": "bg-green-50 dark:bg-green-900",
      "#E1F5EC": "bg-emerald-50 dark:bg-emerald-900",
      "#FEE6CD": "bg-orange-50 dark:bg-orange-900",
      "#E0F6FE": "bg-blue-50 dark:bg-blue-900",
      "#F1E3F9": "bg-purple-50 dark:bg-purple-900",
    };
    return colorMap[bgColor] || "bg-gray-50 dark:bg-gray-800";
  };

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6'>
      {categories.map((category, index)=>(
         <div key={index} className={`group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center ${getBgClasses(category.bgColor)}`}
         onClick={()=>{
          navigate(`/products/${category.path.toLowerCase()}`);
          scrollTo(0,0);
         }}

         >


            <img className='group-hover:scale-108 transition max-w-28' src={category.image} alt={category.text} />
            <p className='text-sm md:text-medium text-gray-900 dark:text-gray-100'>{category.text}</p>
        </div>
      ))}



      </div>
    </div>
  )
}

export default Categories
