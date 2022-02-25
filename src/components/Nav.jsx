import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const desktopNav = [
    {
        display: "Home",
        link: "/"
    },
    {
        display: "About",
        link: "/about"
    },
    {
        display: "Portoflio",
        link: "/portfolio"
    }
]

const Nav = () => {
  return (
    <nav className="space-x-6 text-center w-full md:w-auto mx-auto p-3 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm md:rounded-b-md rounded-none">
            {desktopNav.map((da, index) => 
                <NavLink
                    key={index}
                    to={da.link}
                    className={({ isActive }) => 
                        isActive 
                            ? 'text-white border-b-white border-b-2' 
                            : 'text-white hover:border-b-white border-b-transparent border-b-2'}>
                    {da.display}
                </NavLink>
            )}
    </nav>
  )
}

export default Nav