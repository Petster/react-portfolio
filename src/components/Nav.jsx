import React from 'react'

const desktopNav = [
    {
        display: "Home",
        link: "#"
    },
    {
        display: "About",
        link: "#"
    },
    {
        display: "Portoflio",
        link: "#"
    }
]

const Nav = () => {
  return (
    <nav className="space-x-3 text-center flex-auto">
            {desktopNav.map((da, index) => 
                <a className="text-white hover:border-b-white border-b-transparent border-b-2" key={index} href={da.link}>{da.display}</a>
            )}
    </nav>
  )
}

export default Nav