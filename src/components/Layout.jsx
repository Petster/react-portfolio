import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen w-full md:w-3/4 mx-auto bg-red-200 flex flex-col">
            <header className="flex justify-between content-center flex-row p-2">
                <Nav/>
            </header>
            <section className="flex flex-grow bg-orange-300">
                {children}
            </section>
            <footer className="text-center">
                <p className="text-white">&copy; Jason Palmeri | 2022</p>
            </footer>
    </main>
  )
}

export default Layout