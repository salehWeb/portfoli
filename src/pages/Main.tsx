import React from 'react'
import MainAB from '../components/MainAB'
import Skils from '../components/Skils'

const Main = () => {
    return (
        <div className="overflow-x-hidden flex flex-col w-[100vw]">
            <MainAB />
            <Skils />
        </div>
    )
}

export default Main