import React from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faTwitch, faGithub, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    "icon": faYoutube,
    "url": "https://www.youtube.com/petstergaming",
  },
  {
    "icon": faTwitter,
    "url": "https://twitter.com/Petsterr",
  },
  {
    "icon": faTwitch,
    "url": "https://twitch.tv/petster",
  },
  {
    "icon": faGithub,
    "url": "http://github.com/petster",
  },
  {
    "icon": faLinkedin,
    "url": "https://linkedin.com/in/jasontpalmeri",
  },
  {
    "icon": faInstagram,
    "url": "https://www.instagram.com/petster12/",
  },
]
//bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm
const index = () => {
  return (
    <Layout title="Jason Palmeri | Portfolio" index>
        <div className="flex flex-grow content-center items-center justify-center">
            <div id="indexCard" className="text-center space-y-2 p-6 text-white rounded-xl">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-open-sans text-center">Jason Palmeri</h1>
                <h2 className="text-base sm:text-md md:text-2xl text-white text-center font-open-sans">Software Developer / Video Editor</h2>
                <div className="grid grid-cols-6 text-center pt-4 gap-6">
                  {socialLinks.map((da, index) => 
                    <div key={index}>
                      <a href={da.url} target="_blank" rel="noreferrer">
                        <span className="sr-only">{da.url}</span><FontAwesomeIcon className="fa-2x md:fa-3x text-white hover-socials hover:drop-shadow-lg" icon={da.icon} />
                      </a>
                    </div>
                  )}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default index