import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import myFace from '../img/myface.jpg'

let pStyle = "text-left leading-loose";
let hStyle = "text-xl underline font-bold";

const about = () => {
  return (
    <Layout title="Jason Palmeri | About Me">
        <div className="flex flex-grow">
            <div className="t-bg flex-grow p-3 rounded-none md:rounded-lg text-white">
              <div className="float-right">
                <LazyLoadImage placeholderSrc={myFace} effect="black-and-white" src={myFace} className="border border-black shadow-2xl rounded-full h-72 w-72" />
              </div>
              <p className={pStyle}>
              Hey! My name is Jason Palmeri, I'm 21 years old with an Associates Degree in Web Application Development. I am currently enrolled at Bellevue University for their Software Development Bachelors Program and expect to graduate mid 2023.</p>
              <br/>
              <h1 className={hStyle}>Early Life</h1>
              <p className={pStyle}>When I was younger I was always fascinated with technology, I would spend most of my free time playing video games, watching youtube and twitch, and learning as much as I could about the things I loved. I loved to play around with the junk computers that my father had down in the basement, and with a little help from youtube I taught myself about computer building, and have had my own custom built computer ever since. Having always been interested in youtube and twitch, I eventually saw myself creating videos and live streaming, though I didn't have many viewers or subscribers I kept uploading and streaming, and learning to get better at using the tools available to me like Adobe Premiere Pro, Sony Vegas, and Adobe Photoshop.</p>
              <br/>
              <h1 className={hStyle}>Path to Programming</h1>             
              <p className={pStyle}>Creating things has always been something that was interesting to me, I always admired the things people built online, watching people build replica game items in real life, creating apps, and games. I always wanted to do these things, but never took the initiative. When sophomore year of High School rolled around I had the opportunity to take a new intro to web design and development class. It was my instructor Mark Illingworth who really got me interested in programming, the way he taught the class made it fun and exciting, and he always had something challenging for us to learn. After that class I was on a non-stop journey, I wanted to learn as much as I could. I continued my education at Nashua Community College where I learned new programming languages, and went more indepth into web development and design.</p>
              <br/>
              <h1 className={hStyle}>Today</h1>
              <p className={pStyle}>As I finish up my Bachelor's degree at Bellevue I am seeking Internships focused on Web Development and Software Development. I am also available for freelance work! <Link className="hover:underline text-purple-300" to="/connect">Connect</Link> with me </p>
            </div>
        </div>
    </Layout>
  )
}

export default about