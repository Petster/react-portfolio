import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'

const FoOhFo = () => {
  return (
    <Layout>
        <div className="flex flex-grow content-center items-center justify-center">
            <div id="indexCard" className="text-center space-y-2 p-6 text-white rounded-xl">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-open-sans text-center">Error 404</h1>
                <h2 className="text-base sm:text-lg md:text-3xl text-white text-center font-open-sans">Page Not Found</h2>
                <h2 className="text-base sm:text-sm md:text-xl text-white text-center font-open-sans">Perhaps you typed the url in wrong? <NavLink className="text-white border-b-white border-b-2" to="/">Home</NavLink></h2>
            </div>
        </div>
    </Layout>
  )
}

export default FoOhFo