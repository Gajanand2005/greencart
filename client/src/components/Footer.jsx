
import React from 'react'
import { assets, footerLinks } from '../assets/assets';

const Footer = () => {
    
  return (
    
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-green-200 dark:bg-black">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 dark:border-gray-600 text-gray-500 dark:text-gray-300">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="dummyLogoColored" />
                    <p className="max-w-[410px] mt-6 text-gray-700 dark:text-gray-300"> We deliver fresh  groceries by thousands, we aim to make your shopping experience simple and affordable</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 dark:text-white md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                Copyright {new Date().getFullYear()} © Shopping All Right Reserved.
            </p>
        </div>
    
  )
}

export default Footer
