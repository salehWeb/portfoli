import React from 'react'
import bg from '../imgs/bg.png'

const Main = () => {
    return (

        <div className="min-h-[75vh] w-full bg-pack-train justify-center items-center flex">
            <div className="flex flex-col text-white xl:w-[50%] lg:w-[60%] md:w-[70%] w-full p-4  ml-2 items-center justify-center">
                <h2 className="text-xl text-[#a7fbb7] font-normal">HELLO, I’M SALIH HASSAN</h2>
                <h1 className="text-3xl text-[#a7fbb7] font-bold">Full Stack Developer</h1>
                <p className="text-gray-200 font-light mt-2 w-full  text-base">
                    I’m a Libya-based full-stack developer focused on writing
                    code that makes an impact on users.
                    My biggest strength is my self motivation and I see a setback as 
                    an opportunity to regroup and come back better and stronger. 
                    I hope to gain work experience or either an apprenticeship in
                    web development
                </p>
                <div className="flex rounded-md border-2 border-[#a7fbb7] hover:text-gray-700 hover:font-bold cursor-pointer hover:bg-[#a7fbb7] mt-4 px-3 py-1.5">
                View Project
                </div>
            </div>
        </div>
    )
}

export default Main