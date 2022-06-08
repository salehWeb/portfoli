import React from 'react'
import {Link} from 'react-router-dom'
import {BsMoonStars, BsSunFill} from 'react-icons/bs'
import MyLogo from "../imgs/MyLogo.png"

const Header = () => {
    return (
        <nav className="bg-white dark:bg-gray-600 border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center justify-center w-9">
                    <img src={MyLogo} className="mr-3 h-6 w-full rounded-full sm:h-9" alt="Logo" />
                </Link>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a target="blank" href='https://www.google.com' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CV</a>
                        </li>
                        <li>
                            <Link to="/connect" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Connect Me</Link>
                        </li>
                        <li>
                            <Link to="/project" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header