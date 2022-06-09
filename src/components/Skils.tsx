import React from 'react'
import { Skills } from '../data/projects-data'

const Skils = () => {
    return (
        <div className="w-full mt-10">
            <div className="flex w-full justify-center items-center ">
                <div className="flex flex-row flex-wrap bg-gray-700 w-full mx-10 rounded-md mb-10 px-8 pb-8  justify-center items-center">
                    <div className="text-center text-gray-100 text-xl w-full font-bold justify-center items-center ">
                        <h1 className="w-full text-center flex justify-center my-4 mb-8 text-2xl text-[#a7fbb7] font-bold items-center">
                            My Skills
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 items-center justify-center w-full gap-8">
                            {Skills.map((skill, index) => {
                                return (
                                    <div className="flex flex-row justify-center items-center">

                                        <div className="flex relative">

                                            <div key={index} className="flex flex-col items-center p-4">
                                                <div className="text-center object-contain rounded-[50%] bg-gray-600 p-4 drop-shadow-lg text-xl font-bold">
                                                    {skill.icon()}
                                                </div>
                                            </div>

                                            <div className="absolute top-6 -left-16">
                                                <h3 className="text-xl text-gray-100 font-bold">
                                                    {skill.name}
                                                </h3>
                                                {skill.skills.map((skill, index) => {
                                                    return (
                                                        <div key={index} className="text-gray-100 text-sm">
                                                            {skill.name},
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skils