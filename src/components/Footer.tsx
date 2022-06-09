import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  const MyGitHUB = "https://github.com/salehWeb";
  const MyLinkidin = "https://www.linkedin.com/in/salih-hasan-370547236";

  const fullYear = new Date().getFullYear()
  return (
    <footer className="p-4 bg-gray-300 ">


        <div className="flex mt-4 w-full space-x-6 justify-center">
          <a href={MyGitHUB} className="text-gray-500 hover:text-gray-900" target="_blank" aria-label='Salih github account' rel="noopener noreferrer" >
            <BsGithub className="h-6 w-6" />
          </a>
          <a href={MyLinkidin} className="text-gray-500 hover:text-gray-900" target="_blank" aria-label='Salih linkedin account' rel="noopener noreferrer" >
            <BsLinkedin className="h-6 w-6" />
          </a>
      </div>

      <hr className="my-6 border-gray-900 " />

      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-600 text-center">{fullYear}&copy;. Designed and developed by Salih Hassan. Built with React. 
        </span>
        </div>
    </footer>
  )
}

export default Footer