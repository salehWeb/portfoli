import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <nav className="bg-[#7e7e7e2e] fixed top-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center justify-center w-9">
                    <h1 className="inline-flex text-gray-100 justify-center items-center">
                        <div className="text-[#a7fbb7] text-xl font-semibold">{
                            `{` 
                        }</div>
                        JS
                        <div className="text-[#a7fbb7] text-xl font-semibold">{
                            `}` 
                        }</div>
                    </h1>
                </Link>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                    <ul className="flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.google.com' className="block py-2 text-gray-100 pr-4 pl-3 hover:text-[#a7fbb7] border-gray-100">CV</a>
                        </li>

                        <li>
                            <Link to="/#project" className="block py-2 pr-4 pl-3 text-gray-100 border-gray-100 hover:text-[#a7fbb7]">Project</Link>
                        </li>
                        <li>
                            <Link to="/connect" className="block py-2 pr-4 pl-3 border-2 rounded-md text-gray-100 border-[#a7fbb7] hover:bg-[#a7fbb7]  hover:text-gray-700 hover:font-bold cursor-pointer">Connect Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header